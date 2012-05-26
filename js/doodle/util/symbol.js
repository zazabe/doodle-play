/********************** Doodle Play: Symbol *********************/
(function($, lib, util){


var Symbol = function(name){
	this.name = name;
	this.symbols = null;
	this.objectType = '';
};	

Symbol.prototype = {
	getSymbols: function(){
	    
		var symbols = this.symbols, name = this.name;
		
		if(!symbols){
            $.ajax({
                async: false,
                url: lib.path + this.objectType + '/' + this.name + '.js',
                dataType: 'script',
                success: function(result, status, request){
                    symbols = data;
                }
            });
		}
		return symbols;
	}	
};

util.Symbol = Symbol; 
	
})(jQuery, $.DoodlePlay.Library, $.DoodlePlay.Util)
