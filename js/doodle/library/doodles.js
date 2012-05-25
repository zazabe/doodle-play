(function($, util, lib){
/********************** Doodles Handler *********************/

var Doodles = function(definition){
	this.doodles = {};

	this.parts = definition.parts;
	this.createDoodles(definition.symbols);
};	

Doodles.prototype = {
	createDoodles: function(doodles){
		for(var name in doodles){
			this.doodles[name] = new Doodle(name, doodles[name]);
		}
	},
	
	getDoodle: function(name){
		return this.doodles[name];
	},
	
	getDoodleNames: function(){
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
	}
};

var Doodle = function(name, config){
	util.Symbol.apply(this, [name]);
	this.config = config;
};

Doodle.prototype = new util.Symbol();
Doodle.prototype.constructor = Doodle;


lib.setupDoodles = function(definition){
 this.Doodles = new Doodles(definition);
};
	

})(jQuery, $.DoodlePlay.Util, $.DoodlePlay.Library)