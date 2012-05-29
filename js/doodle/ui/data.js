/********************** DoodleUI Data *********************/
(function($, dp, db){

var DoodleData = function(){
    
};

DoodleData.prototype = {
    getCurrentScene: function(){
		var datas, url = dp.Library.path + '../js/doodle-default.json';
		$.ajax({
			async: false,
			url: url,
			dataType: 'json',
			success: function(result, status, request){
				datas = result;
			},
			error: function(result, status, request){
				throw new Error('can\'t not load doodle play default config');
			}
		});
		return datas;
    }
};


dp.UI = dp.UI || {};
dp.UI.Data = new DoodleData();


})(jQuery, $.DoodlePlay, persistence)
