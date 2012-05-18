console.log('main');

var debug = false; 

$.Edge.registerCompositionReadyHandler( 'meeting-2', function(){
	$('div').each(function(){
		var  el = $(this), id = el.attr('id'), matches = [], elements = null, doodle_part = null;
		console.group(id);
		elements = id.match(/([^_]+)/g);
		for(var index in elements){
			doodle_parts = elements[index].match(/([^-]+)/g);
			if(doodle_parts[0] && doodle_parts[0] == 'ddl'){
				for(var i = 0 ; i < doodle_parts.length ; i++){
					el.addClass(doodle_parts[i]);
				}
				if(debug) {
					el.addClass('debug');
				}
			}
		}
		console.log('apply class', el.attr('class'));
		console.groupEnd();
	});
});



