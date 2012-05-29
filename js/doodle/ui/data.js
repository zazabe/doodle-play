/********************** DoodleUI Data *********************/
(function($, dp, db){

var DoodleData = function(){
    this.db = db;
	this.model = {};
	this.init();
	this.currentScene = null;
};

DoodleData.prototype = {
	init: function(callback){
		this.db.store.websql.config(this.db, 'doodleplay', 'DoodlePlay database', 5 * 1024 * 1024);
		this.model = {
			scene: this.db.define('Scene', {
			  name: "TEXT",
			  description: "TEXT",
			  config: "JSON"
			})
		};
		
		this.db.schemaSync(callback);
	},

	
	getCurrentScene: function(callback, scope){
		var id = this.getSceneId(), datas = null, uidata = this;
		if(!this.currentScene){
			if(id) {
                var q = this.model.scene.all().filter("id", '=', id).limit(1);
                q.one(null, function(result){
                    uidata.currentScene = result.config;
                    callback.apply(scope || this, [result.config]);
                });
            }
            else {
                var url = dp.Library.path + '../js/doodle-default.json';
                $.ajax({
                    url: url,
                    async: true,
                    dataType: 'json',
                    success: function(result, status, request){
                        uidata.currentScene = result;
                        callback.apply(scope || this, [result]);
                    },
                    error: function(result, status, request){
                        throw new Error('can\'t not load doodle play default config');
                    }
                });
            }
        }
        else {
            callback.apply(scope || this, [this.currentScene]);
        }
		
	},
	
	getSceneId: function(){
		var id = null, regexp = /\?scene_id=([A-Z0-9]+)$/;
		if(regexp.test(window.location.href)){
			var match = window.location.href.match(regexp);
			id = match[1] || null;
		}
		
		return id;
		
	},
	
	save: function(name, description, config, callback, scope){
		var scene = new this.model.scene({
			name: 		 name || '',
			description: description || '',
			config: 	 config || {}
		});
		this.db.add(scene);
		this.db.flush(function(){
			callback.apply(scope || this, [scene]);
		});
	}
};


dp.UI = dp.UI || {};
dp.UI.Data = new DoodleData();


})(jQuery, $.DoodlePlay, persistence)
