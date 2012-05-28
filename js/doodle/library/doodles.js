(function($, util, lib){
/********************** Doodles Handler *********************/

var Doodles = function(definition){
	this.doodles = {};

	this.parts = definition.parts;
	this.create(definition.symbols);
};	

Doodles.prototype = {
	create: function(config){
	    for(var name in config){
		    this.doodles[name] = new Doodle(name, config[name], this);
		}
	},

    forEach: function(func, scope){
        for(var name in this.doodles){
            func.apply(scope  || this, [this.doodles[name], name]);
        }
    },
    	
	get: function(name){
		return this.doodles[name];
	},
	
	getNames: function(){
		var names = [];
		for(var name in this.doodles){
			names.push(name);
		}
		return names;
	},
	
	getHeadStyles: function(){
		return this.parts.head;
	},
	
	getFaceStyles: function(){
		return this.parts.face;
	},
	
	getParts: function(name){
	    return this.parts[name];
	}
};


/**
 * Doodle library item
 */
var Doodle = function(name, config, doodles){
    this.parent.apply(this, [name]);
	
	this.objectType = 'doodle';
    this.doodles = doodles;
	this.config = config;
	this.parts = {};
	
	this.setParts();
};

Doodle.extend(util.Symbol, {
    
    setParts: function(){
        var partName = null, part = null;
        /* default part */
        this.parts = {    
            body: {
                type: this.config.type,
                size: this.config.size,
                css:  this.config.css || {}
            }
        };

        /* additional parts */
        for(var index in (this.config.part || [])){
            partName = this.config.part[index];
            if(part = this.doodles.getParts(partName)){
                this.parts[partName] = part;
            }
        }
    },
    
    getInstance: function(id, config){
        var doodle = new DoodleInstance(this);
        doodle.define(id, config);
        return doodle;
    }
});


var DoodleInstance = function(doodle){
    this.parent.apply(this, [doodle.name]);
    
    this.doodle = doodle;
    this.objectType = 'doodle';
    this.config = this.doodle.config;
    this.parts = this.doodle.parts;

    this.state = DoodleInstance.UNSET;
    this.type = null;
    
};

DoodleInstance.UNSET   = 0;
DoodleInstance.SYMBOL  = 1;
DoodleInstance.DEFINED = 2;

DoodleInstance.extend(util.Symbol, {
    define: function(id, config){
        this.type = config.type;
        this.config = config;
        this.id = id;
    },
    
    setSymbols: function(symbols){
        this.symbols = symbols;
        this.element = $(this.symbols.element[0]);
        for(var name in this.parts){
            this.parts[name].element = $('div[id*=' + name + ']', this.element);
        }
        
        this.state = DoodleInstance.SYMBOL;
    },
    
    
    applyStyles: function(){
        if(this.state < DoodleInstance.SYMBOL){
            throw new Error('doodle instance is not ready yet');
        }
        
        var folder = null, part = null, conf = null; 
        
        for(var name in this.parts){
            part = this.parts[name];
            conf = this.config[name];
            
            if(name == 'text' && conf){
                part.element.html(conf.text);
                part.element.css({
                   fontFamily: conf.font
                });
            }
            else {
                folder = name == 'body' ? this.type : name;
                part.element.css({
                    backgroundImage:     'url(' + lib.path + 'doodle/' + folder + '/' + conf.name + ($.DoodlePlay.dev ? '-dev' : '' ) +  '.svg )',
                    backgroundPositionX: -(part.size.width * conf.index) + 'px',
                    backgroundPositionY: '0px',
                    backgroundRepeat:    'no-repeat',
                    width:               conf.width,
                    height:              conf.height
                });    
            }
        }
        
        this.state = DoodleInstance.DEFINED;
    }    
});



lib.setupDoodles = function(definition){
    this.Doodles = new Doodles(definition);
};
	

})(jQuery, $.DoodlePlay.Util, $.DoodlePlay.Library)