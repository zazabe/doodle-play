console.log('main');

$.Edge.registerCompositionReadyHandler( 'meeting-2', function(){
	$('div').each(function(){
		var id = $(this).attr('id'), matches = [], i = 0, el;
		console.group(id);
		var elements = id.match(/([^_]+)/g);
		console.log(elements);
		/*
		for(var index in elements){
			el = elements[index];
			console.log(el, el.match(/ddl-(.*?)-(.*?)/));	
		}
		*/
		console.groupEnd();
	});
});



