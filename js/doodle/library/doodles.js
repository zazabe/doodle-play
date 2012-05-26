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

var Doodle = function(name, config, doodles){
    console.log(name, config);
    
    this.parent.apply(this, [name]);
	
	this.objectType = 'doodle';
    this.doodles = doodles;
	this.config = config;
	this.parts = {};
	
	this.type =  null;
	
	this.setParts();
};

Doodle.extend(util.Symbol, {
    setParts: function(){
        var partName = null, part = null;
        console.log(this.config.part);
        for(var index in (this.config.part || [])){
            partName = this.config.part[index];
            if(part = this.doodles.getParts(partName)){
                this.parts[partName] = part;
            }
        }
    },
    
    configure: function(config){
        console.log(config);
        this.type = config.type;
    },
    
    applyStyles: function(){
        
    }
});


lib.setupDoodles = function(definition){
 this.Doodles = new Doodles(definition);
};
	

})(jQuery, $.DoodlePlay.Util, $.DoodlePlay.Library)