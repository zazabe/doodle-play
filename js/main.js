/* default scene, doodle definition */
(function(doodlePlay){

    var defaultScene = {
    	scene: 'announcement',
    	background: 'countryside',
    	doodles: {
    		speaker: {
    			type: 'animal',
    			head: {
                    name:  'sheep',
    			    index: 0
                },
    			face: {
                    name:  'default',
                    index: 1
                },
    			body: {
                    name:  'sheep',
                    index: 0
                }
    		},
    		message: {
    		    type: 'bubble',
    		    body: {
    		        name:  'speaking',
                    index: 0
                },
    		    text: {
    		        text: 'I love my doodle play !',
    		        font: 'markerfelt'
                }
    		}
    	}
    };
    
    doodlePlay.State.load(function(){
    	this.create(defaultScene);
    });
    
    doodlePlay.State.ready(function(){
        console.log('ready');
    });

})($.DoodlePlay)
