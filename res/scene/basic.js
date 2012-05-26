var data = {
	"stage": {
	   version: "0.1.5",
	   build: "0.9.0.113",
	   baseState: "Base State",
	   initialState: "Base State",
	   gpuAccelerate: true,
	   content: {
	         dom: [
	         {
	            id:'scene',
	            type:'rect',
	            rect:[150,200,0,0]
	         }],
	         symbolInstances: [
	         {
	            id:'scene',
	            symbolName:'scene'
	         }
	         ]
	      },
	   states: {
	      "Base State": {
	         "${_Stage}": [
	            ["color", "background-color", 'rgba(255,255,255,1)'],
	            ["style", "height", '400px'],
	            ["style", "width", '550px']
	         ],
	         "${_scene}": [
	            ["transform", "scaleX", '1'],
	            ["transform", "translateY", '0px'],
	            ["transform", "scaleY", '1'],
	            ["transform", "translateX", '0px']
	         ],
	         "body": [
	            ["color", "background-color", 'rgba(0,0,0,0)']
	         ]
	      }
	   },
	   timelines: {
	      "Default Timeline": {
	         fromState: "Base State",
	         toState: "",
	         duration: 9000,
	         autoPlay: true,
	         labels: {
	
	         },
	         timeline: [
	            { id: "eid168", tween: [ "style", "${_RoundRect}", "border-top-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
	            { id: "eid200", tween: [ "transform", "${_scene}", "translateX", '-40px', { fromValue: '0px'}], position: 1, duration: 4000, easing: "easeInOutQuad" },
	            { id: "eid199", tween: [ "transform", "${_scene}", "scaleY", '2', { fromValue: '1'}], position: 1, duration: 4000, easing: "easeInOutQuad" },
	            { id: "eid198", tween: [ "transform", "${_scene}", "scaleX", '2', { fromValue: '1'}], position: 1, duration: 4000, easing: "easeInOutQuad" }         ]
	      }
	   }
	},
	"scene": {
	   version: "0.1.5",
	   build: "0.9.0.113",
	   baseState: "Base State",
	   initialState: "Base State",
	   gpuAccelerate: true,
	   content: {
	   dom: [
	   {
	      id: 'speaker',
	      type: 'rect',
	      rect: [0,0,0,0]
	   }],
	   symbolInstances: [
	   {
	      id: 'speaker',
	      symbolName: 'speaker'
	   }]
	   },
	   states: {
	      "Base State": {
	         "${_speaker}": [
	            ["transform", "translateX", '-300px'],
	            ["transform", "translateY", '0px'],
	            ["transform", "rotateZ", '0deg']
	         ]
	      }
	   },
	   timelines: {
	      "Default Timeline": {
	         fromState: "Base State",
	         toState: "",
	         duration: 2000,
	         autoPlay: true,
	         labels: {
	
	         },
	         timeline: [
	            { id: "eid187", tween: [ "transform", "${_speaker}", "translateX", '50px', { fromValue: '-300px'}], position: 0, duration: 1000, easing: "easeInOutQuad" }
	         ]
	      }
	   }
	}
};