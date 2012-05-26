var data = {
	"animal": {
	   version: "0.1.5",
	   build: "0.9.0.113",
	   baseState: "Base State",
	   initialState: "Base State",
	   gpuAccelerate: true,
	   content: {
	   dom: [
	   {
	      rect: [-82,-28,58,36],
	      borderRadius: [10,10,10,10],
	      transform: [[82,46]],
	      id: 'ddl-body',
	      stroke: [0,'rgba(0,0,0,1)','none'],
	      type: 'rect',
	      fill: ['rgba(227,228,59,1.00)']
	   },
	   {
	      rect: [34,0,43,38],
	      borderRadius: [10,10,10,10],
	      transform: [[3],[12]],
	      id: 'ddl-head',
	      stroke: [0,'rgb(0, 0, 0)','none'],
	      type: 'rect',
	      fill: ['rgba(208,192,55,1.00)']
	   }],
	   symbolInstances: [
	   ]
	   },
	   states: {
	      "Base State": {
	         "${_ddl-body}": [
	            ["color", "background-color", 'rgba(227,228,59,1.00)'],
	            ["transform", "translateY", '46px'],
	            ["transform", "translateX", '82px']
	         ],
	         "${_ddl-head}": [
	            ["style", "-webkit-transform-origin", [40,60], {valueTemplate:'@@0@@% @@1@@%'} ],
	            ["style", "-moz-transform-origin", [40,60],{valueTemplate:'@@0@@% @@1@@%'}],
	            ["style", "-ms-transform-origin", [40,60],{valueTemplate:'@@0@@% @@1@@%'}],
	            ["style", "msTransformOrigin", [40,60],{valueTemplate:'@@0@@% @@1@@%'}],
	            ["style", "-o-transform-origin", [40,60],{valueTemplate:'@@0@@% @@1@@%'}],
	            ["color", "background-color", 'rgba(208,192,55,1.00)'],
	            ["transform", "translateX", '3px'],
	            ["transform", "rotateZ", '0deg']
	         ],
	         "${symbolSelector}": [
	            ["style", "height", '64px'],
	            ["style", "width", '65px']
	         ]
	      }
	   },
	   timelines: {
	      "Default Timeline": {
	         fromState: "Base State",
	         toState: "",
	         duration: 1023,
	         autoPlay: true,
	         labels: {

	         },
	         timeline: [
	            { id: "eid14", tween: [ "transform", "${_ddl-head}", "rotateZ", '12deg', { fromValue: '0deg'}], position: 0, duration: 369 },
	            { id: "eid15", tween: [ "transform", "${_ddl-head}", "rotateZ", '-12deg', { fromValue: '12deg'}], position: 369, duration: 380 },
	            { id: "eid20", tween: [ "transform", "${_ddl-head}", "rotateZ", '0deg', { fromValue: '-12deg'}], position: 750, duration: 273 }         ]
	      }
	   }
	}
};