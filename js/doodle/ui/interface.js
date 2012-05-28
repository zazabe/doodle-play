/********************** DoodleUI Core *********************/
(function($, dp, tmp){

var DoodleUI = function(container, elements) {
    this.container = container;
    
    /*
     * templates:
     * - modal
     * - panel
     * - field
     * - inputtext
     * - select
     */
    this.templates = (function(){
        var html = $('[type*=mustache]'), templates = {};
        html.each(function(){
            var el = $(this);
            templates[el.attr('id')] = el.html();
        });
        return templates;
    })();

    //this.els.settings.modal('hide');
    
    this.doodleSelectors = [];
    this.bgLimit = {};
    
    this.getBgConfig();
    this.createForms();
    this.getElements();
    this.listen();
};  

DoodleUI.prototype = {
    
    createForms: function(){
        var panels = '', select = '', scenes = [], status = 'visible';
        
        dp.Library.Scenes.forEach(function(scene, name){
            scenes.push({name: name, value: name});
            panels += this.createSceneForm(name, scene, status);
            status = 'hidden';
        }, this);
        
        select = this.renderField('select', 'Scene', 'scenes', scenes);
        
        this.container.append(tmp.render(this.templates.modal, {
            select: select,
            panels: panels
        }));
    },
    
    createSceneForm: function(name, scene, status){
        var fields = '';
        console.log(scene.doodles);
        scene.forEachDoodles(function(doodle, doodleName){
            fields += this.createDoodleForm(name, doodleName, doodle.type); 
        }, this);
        
        return tmp.render(this.templates.panel, {
            status: status,
            name: name,
            fields: fields
        });
    },
    
    createDoodleForm: function(sceneName, doodleName, types){
        var datas = this.renderDoodles(sceneName, doodleName, types);    
        datas.label = doodleName;
        return tmp.render(this.templates.doodleFields, datas);
    },
    
    renderDoodles: function(sceneName, doodleName, types){
        var field = [], fields = '', doodles = [], part = null, doodleField = '', status = 'visible';
        dp.Library.Doodles.forEach(function(doodle){
            var has = false;
            for(var i in types){
                has = types[i] == doodle.name ? true : has;
            }
            if(has){
                
                fields += '<div class="' + doodle.name + ' ' + status + '">';
                status = 'hidden';
                for(var id in doodle.parts){
                    part = doodle.parts[id];
                    
                    if(id != 'text'){
                        field = [];
                        for(var index in part.type){
                            field.push({name: part.type[index], value: part.type[index]});
                        }
                        
                        doodleField = tmp.render(this.templates.doodleSelect, {
                                        id: sceneName + '_' + doodle.name + '_' + id,
                                        options: field,
                                        level: 2
                                      });
                            
                    }
                    else {
                        doodleField = tmp.render(this.templates.inputtext, {
                                        id: sceneName + '_' + doodle.name + '_' + id,
                                        options: '',
                                        level: 2
                                     });
                    }
                    
                    fields += tmp.render(this.templates.doodleField, {
                        label:  id,
                        id:     name + '_' + doodle.name + '_' + id,
                        field:  doodleField  
                    });
                }
                fields += '</div>';
                doodles.push({name: doodle.name, value: doodle.name});    
            }
        }, this);
        
        this.doodleSelectors.push(sceneName + '_' + doodleName);
        
        select = tmp.render(this.templates.select, {
            id: sceneName + '_' + doodleName,
            options: doodles,
            level: 3
        });
        
        return {
            select: select,
            fields: fields
        };
        
    },
    
    getBgConfig: function(){
        var part = null, ddls = dp.Library.Doodles;
        
        ddls.forEach(function(doodle, name){
            for(var index in doodle.config.type){
                for(var name in doodle.parts){
                
                    var size = ddls.parts[name] ? ddls.parts[name].size : doodle.config.size;
                    var file = doodle.config.type[index];
                    var exist = name == 'body';
                    var part = ddls.getParts(name);
                    
                    if(!exist && part){
                        for(var i in part.type){
                            if(part.type[i] == file){
                                exist = true;
                            }
                        }    
                    }
                    
                    if(size && exist){
                        this.addBackgroundLimit(file, name, doodle.name,  size.width);
                    }
                }
            }
        }, this);
        
        this.addBackgroundLimit('default', 'face', '',  200);
                    
    },
    
    addBackgroundLimit: function(file, partName, doodleName, width){
        var id = partName + '_' + file;
        var bglimit = this.bgLimit;
        if(!bglimit[id]){
            var image = new Image();
            folder = partName == 'body' ? doodleName : partName;
            
            image.setAttribute('src', dp.Library.path + 'doodle/' + folder + '/' + file  +  '.svg');
            image.onload = function(){
                bglimit[id] = (image.width/width) - 1;
            };    
        }
    },
    
    renderField: function(type, label, id, values, level){
        return tmp.render(this.templates.field, {
            label: label,
            field: tmp.render(this.templates[type], {
                id: id,
                options: values,
                level: (level || 3)
            })
        });
    },
    
    getElements: function(){
        this.els = {
            settings: this.$('#settings'),
            close:    this.$('.close'),
            open:     this.$('.btn.settings'),
            execute:  this.$('.btn.apply'),
            panels:   this.$('.panels')
        };
    },
    
    listen: function(){
        var modalElements = this.els, bglimit = this.bgLimit;
        
        this.els.close.bind('click', function(){
            modalElements.settings.modal('hide');
        });
        
        this.els.open.bind('click', function(){
            modalElements.settings.modal('show');
        });
        
        this.els.execute.bind('click', function(){ this.execute.apply(this);});
        
        this.$('#scenes').bind('change', function(){
            var selected = $('#' + $(this).val());
            modalElements.panels.hide();
            selected.show();
        });
        
        this.$('.increase').live('click', function(){
            var el = $(this), number = el.prev(), partName = el.parent().prev().html(), sel = el.parent().children('select'), val = parseInt(number.html());
            var limit = bglimit[partName + '_' + sel.val()];
            number.html(val + 1 <= limit ? val + 1 : val);
            return false;
        });
        
        this.$('.decrease').live('click', function(){
            var el = $(this), number = el.next(), val = parseInt(number.html());
            number.html(val - 1 >= 0 ? val - 1 : val);
            return false;
        });
        
        var selector = null;
        for(var index in this.doodleSelectors){
            selector = this.$('#' + this.doodleSelectors[index]);
            selector.bind('change', function(){
                var el = $(this), children = el.next().children(), selected = $('.' + el.val(), el.next());
                children.hide();
                selected.show();
            });
        }
    },
    
    execute: function(){
        
    },

    getCurrentScene: function(){
        
    },

    $: function(selector){
        return $(selector, this.container);    
    }
    

};

dp.UI = dp.UI || {};
dp.UI.Interface = DoodleUI;

})(jQuery, $.DoodlePlay, Mustache)
