/* default scene, doodle definition */
(function(doodlePlay){

var defaultScene = {
	scene: 'basic',
	background: 'blank',
	doodles: {
		main: {
			type: 'human',
			head: 'girl',
			face: 'happy',
			body: 'girl'
		},
		message: {
			text: 'I love my doodle !'
		}
	}
};

doodlePlay.State.ready(function(){
	this.create(defaultScene);
});


})($.DoodlePlay)