/* default scene, doodle definition */
(function(doodlePlay){

var defaultScene = {
	scene: 'basic',
	background: 'blank',
	doodles: {
		speaker: {
			type: 'animal',
			head: {
                name:  'pig',
			    index: 0
            },
			face: {
                name:  'basic',
                index: 0
            },
			body: {
                name:  'pig',
                index: 0
            }
		},
		message: {
			text: 'I love my doodle !'
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