/********************** Doodle Play: Symbol *********************/
(function($, lib, util){


var Symbol = function(name){
	this.name = name;
	this.symbols = null;
	this.objectType = '';
};	

Symbol.prototype = {
	getSymbols: function(){
	    
		var symbols = this.symbols, name = this.name, url = lib.path + this.objectType + '/' + this.name + '.js';
		
		if(!symbols){
            $.ajax({
                async: false,
                url: url,
                dataType: 'script',
                success: function(result, status, request){
                    symbols = data;
                },
                error: function(result, status, request){
                    throw new Error('can\'t get ' + url);
                }
            });
		}
		return symbols;
	}	
};

util.Symbol = Symbol; 
	
})(jQuery, $.DoodlePlay.Library, $.DoodlePlay.Util)
