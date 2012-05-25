/********************** Doodle Play: Basic objects *********************/
(function($, lib, util){


var Symbol = function(name){
	this.name = name;
};	

Symbol.prototype = {
	getSymbol: function(){
		var symbol = null, name = this.name;
		$.ajax({
			async: false,
			url: lib.path + 'doodles/' + this.name + '.js',
			dataType: 'script',
			success: function(result, status, request){
				symbol = data[name];
			}
		});
		return symbol;
	}	
};

util.Symbol = Symbol; 
	
})(jQuery, $.DoodlePlay.Library, $.DoodlePlay.Util)
