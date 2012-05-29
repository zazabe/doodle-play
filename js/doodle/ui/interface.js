/********************** DoodleUI Core *********************/
(function($, dp, tmp){

var DoodleUI = function(container, elements) {
    this.container = container || $('body');
    
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
 
    this.doodleSelectors = [];
    this.bgLimit = {};
    
    this.getBgConfig();
    this.createModal(function(){
        this.getElements();
        this.listen();
        this.els.settings.modal({show: false});
        
        dp.UI.Data.getCurrentScene(function(config, name){
            this.setConfig(config, name);
        }, this);
            
    }, this);
    
};  

DoodleUI.prototype = {
    
    
    createModal: function(callback, scope){
        var ui = this, datas = this.createForms();
        this.createList(function(result){
            this.container.append(tmp.render(this.templates.modal, $.extend(datas, result)));    
            
            callback.apply(scope || ui, []);
        }, this);
    },
    
    createList: function(callback, scope){
        var list = '', scenes = [], ui = this;
        
        dp.UI.Data.model.scene.all().list(null, function (results) {
            results.forEach(function (r) {
                scenes.push({
                    shortid: r.id.substring(0,4),
                    id: r.id,
                    name: r.name
                });
            });
            list = tmp.render(ui.templates.list, {scenes: scenes});
            
            callback.apply(scope || ui, [{list: list}]);
        });
    },
    
    createForms: function(){
        var panels = '', select = '', scenes = [], status = 'visible';
        
        dp.Library.Scenes.forEach(function(scene, name){
            scenes.push({name: name, value: name});
            panels += this.createSceneForm(name, scene, status);
            status = 'hidden';
        }, this);
        
        
        var bg = dp.Library.Scenes.background, background = [];
        for(var index in bg){
            background.push({name: bg[index], value: bg[index]});
        }
        
        select = this.renderField('inputtext', 'Name', 'sceneName', []);
        select += this.renderField('select', 'Scene', 'scenes', scenes);
        select += this.renderField('select', 'Background', 'background', background);
        
        return  {
            select: select,
            panels: panels
        };
    },
    
    createSceneForm: function(name, scene, status){
        var fields = '';
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
                                        id: sceneName + '_' + doodleName + '_' + id,
                                        options: field,
                                        incr: part.size.width,
                                        level: 2
                                      });
                            
                    }
                    else {
                        doodleField = tmp.render(this.templates.inputtext, {
                                        id: sceneName + '_' + doodleName + '_' + id,
                                        options: '',
                                        level: 2
                                     });
                    }
                    
                    fields += tmp.render(this.templates.doodleField, {
                        label:  id,
                        id:     name + '_' + doodleName + '_' + id,
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
            settings: $('#settings'),
            close:    this.$('.close'),
            open:     $('.btn.settings'),
            execute:  this.$('.btn.apply'),
            panels:   this.$('.panels'),
            actions:  this.$('.btn-group .btn'),
            views:    this.$('.views'),
            edit:     this.$('.edition'),
            play:     this.$('.play'),
            preview:  this.$('.part-label'),
            "delete": this.$('.delete'),
            
        };
    },
    
    listen: function(){
        var modalElements = this.els, bglimit = this.bgLimit, ui = this;
        
        this.els.preview.live('click', function(){
            var el = $(this), part = el.html();
            console.log(part);
            
            if(part != 'text'){
                var file = el.next().children('select').val(),
                    preview = el.parent().parent().parent().children('.preview');    
                
                console.log(file, el.parent().parent().parent(), preview);
            
                if(part != 'body'){
                    preview.css({
                        backgroundImage:     'url(' + dp.Library.path + 'doodle/' + part + '/' + file + '.svg )',
                        backgroundPositionY: '0px',
                        backgroundSize:      'auto 100%',
                        backgroundRepeat:    'no-repeat',
                    });
                }
                else {
                    
                }
                    
                
            }
            return false; 
        });
        
        
        this.els.edit.live('click', function(){
            var el = $(this), id = el.attr('id');    
            var q = dp.UI.Data.model.scene.all().filter("id", '=', id).limit(1);
            q.one(null, function(result){
                ui.setConfig(result.config, result.name);
                ui.els.actions.removeClass('active');
                ui.els.actions.filter('.edit').addClass('active');
                modalElements.views.hide();
                modalElements.views.filter('#edit').show();
            });
            return false; 
        });
        
        this.els.play.live('click', function(){
            var el = $(this), id = el.attr('id');    
            window.location.href = window.location.href.replace(/([^\/]*)$/, '?scene_id=' + id);
            return false; 
        });
        
        this.els['delete'].live('click', function(){
            var el = $(this), parent = el.parent().parent(),  id = el.attr('id');
            
            parent.css({opacity: 0.6});
            
            var q = dp.UI.Data.model.scene.all().filter("id", '=', id).limit(1);
            q.one(null, function(result){
                dp.UI.Data.db.remove(result);
                dp.UI.Data.db.flush(function(){
                    parent.remove();
                });
            });
            return false;
        });
        
        this.els.actions.live('click', function(){
            modalElements.views.hide();
            modalElements.views.filter('#' + $(this).html()).show();
            return false;
        });
        
        this.els.close.live('click', function(){
			console.log('close modal');
            modalElements.settings.modal('hide');
            return false;
        });
        
        this.els.open.live('click', function(){
            console.log('open modal');
			modalElements.settings.modal('show');
			return false;
        });
        
        this.els.execute.bind('click', function(){ 
            ui.execute.apply(ui);
            return false;
        });
        
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
	
	getConfig: function(){
		var config = {};
		//scene
		config.scene = $('#scenes').val();
		config.background = $('#background').val();
		//doodles
		var panel = $('#' + config.scene + '.panels'), doodles = {}, doodle = {};
			
		panel.children().each(function(){
			var name = $(this).children('label').html(), controls = $(this).children('.controls');
			doodle = {};
			doodle.type = controls.children('select').val();
			controls.children('div').children('div:visible').children('label').each(function(){
				var partLabel = $(this);
				if(partLabel.html() == 'text'){
					doodle['text'] = {
						text: partLabel.next().children('input').val(),
						font: "markerfelt"
					};
				}
				else {
					doodle[partLabel.html()] = {
						name: partLabel.next().children('select').val(),
						index: parseInt(partLabel.next().children('.index').html())
					};
				}
				
			});
			
			doodles[name] = doodle;
		});
		
		config.doodles = doodles;
		
		return config;
	},
	
	setConfig: function(config, name){
		
		$('#sceneName').val(name || '');
        $('#scenes').val(config.scene);
		$('#background').val(config.background);
        
        this.els.panels.hide();
        var panel = this.els.panels.filter('#' + config.scene);
        panel.show();
        
        
        var doodle = null, part = null, elselect = null, eldoodle = null, select = null;
        for(var name in config.doodles){
            doodle = config.doodles[name];
            elselect = $('#' + config.scene + '_' + name, panel);
            eldoodle = $('.' + doodle.type, panel);
            
            elselect.val(doodle.type);
            elselect.next().children().hide();
            eldoodle.show();
            
            for(var partName in doodle){
                if(partName != 'type'){
                    part = doodle[partName], select = $('#' + config.scene + '_' + name  + '_' + partName, eldoodle);
                    if(partName == 'text'){
                        select.val(part.text);
                    }
                    else {
                        select.val(part.name);
                        select.next().next().html(part.index);
                    }
                }
            }
        }
        
	},
    
    execute: function(){
		dp.UI.Data.save($('#sceneName').val(), '', this.getConfig(), function(object){
			console.log('saved', arguments);
			window.location.href = window.location.href.replace(/([^\/]*)$/, '?scene_id=' + object.id);
		});
    },

    $: function(selector){
        return $(selector, this.container);    
    }
    

};

dp.UI = dp.UI || {};
dp.UI.Interface = DoodleUI;

})(jQuery, $.DoodlePlay, Mustache)
