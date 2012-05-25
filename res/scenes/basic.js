var symbols = {
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
	            { id: "eid201", tween: [ "transform", "${_scene}", "translateY", '276px', { fromValue: '0px'}], position: 1, duration: 4000, easing: "easeInOutQuad" },
	            { id: "eid200", tween: [ "transform", "${_scene}", "translateX", '2px', { fromValue: '0px'}], position: 1, duration: 4000, easing: "easeInOutQuad" },
	            { id: "eid199", tween: [ "transform", "${_scene}", "scaleY", '2.68', { fromValue: '1'}], position: 1, duration: 4000, easing: "easeInOutQuad" },
	            { id: "eid198", tween: [ "transform", "${_scene}", "scaleX", '2.68', { fromValue: '1'}], position: 1, duration: 4000, easing: "easeInOutQuad" }         ]
	      }
	   }
	},
	"watcherLeft": {
	   version: "0.1.5",
	   build: "0.9.0.113",
	   baseState: "Base State",
	   initialState: "Base State",
	   gpuAccelerate: true,
	   content: {
	   dom: [
	   {
	      id: 'watcher_4',
	      type: 'rect',
	      rect: [351,-18,0,0]
	   },
	   {
	      id: 'watcher_3',
	      type: 'rect',
	      rect: [351,-18,0,0]
	   },
	   {
	      id: 'watcher_2',
	      type: 'rect',
	      rect: [351,-18,0,0]
	   },
	   {
	      id: 'watcher_1',
	      type: 'rect',
	      rect: [351,-18,0,0]
	   }],
	   symbolInstances: [
	   {
	      id: 'watcher_3',
	      symbolName: 'watcher'
	   },
	   {
	      id: 'watcher_1',
	      symbolName: 'watcher'
	   },
	   {
	      id: 'watcher_4',
	      symbolName: 'watcher'
	   },
	   {
	      id: 'watcher_2',
	      symbolName: 'watcher'
	   }   ]
	   },
	   states: {
	      "Base State": {
	         "${_watcher_4}": [
	            ["transform", "scaleX", '0.707'],
	            ["transform", "translateY", '9.376px'],
	            ["transform", "translateX", '-251.522px'],
	            ["transform", "scaleY", '0.707']
	         ],
	         "${symbolSelector}": [
	            ["style", "height", '163.695999px'],
	            ["style", "width", '155.509987px']
	         ],
	         "${_watcher_2}": [
	            ["transform", "scaleX", '1.203'],
	            ["transform", "translateY", '47.496px'],
	            ["transform", "translateX", '-328.402px'],
	            ["transform", "scaleY", '1.203']
	         ],
	         "${_watcher_3}": [
	            ["transform", "translateX", '-270px'],
	            ["transform", "translateY", '26px']
	         ],
	         "${_watcher_1}": [
	            ["transform", "scaleX", '1.507'],
	            ["transform", "translateY", '116.224px'],
	            ["transform", "translateX", '-300.477px'],
	            ["transform", "scaleY", '1.507']
	         ]
	      }
	   },
	   timelines: {
	      "Default Timeline": {
	         fromState: "Base State",
	         toState: "",
	         duration: 4000,
	         autoPlay: true,
	         labels: {
	
	         },
	         timeline: [
	            { id: "eid120", tween: [ "transform", "${_watcher_1}", "translateY", '93.776px', { fromValue: '116.224px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
	            { id: "eid114", tween: [ "transform", "${_watcher_4}", "translateY", '3.375px', { fromValue: '9.376px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
	            { id: "eid116", tween: [ "transform", "${_watcher_3}", "translateY", '22px', { fromValue: '26px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
	            { id: "eid113", tween: [ "transform", "${_watcher_4}", "translateX", '29.477px', { fromValue: '-251.522px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
	            { id: "eid117", tween: [ "transform", "${_watcher_2}", "translateX", '19.597px', { fromValue: '-328.402px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
	            { id: "eid118", tween: [ "transform", "${_watcher_2}", "translateY", '54.495px', { fromValue: '47.496px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
	            { id: "eid115", tween: [ "transform", "${_watcher_3}", "translateX", '52px', { fromValue: '-270px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
	            { id: "eid119", tween: [ "transform", "${_watcher_1}", "translateX", '78.477px', { fromValue: '-300.477px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" }         ]
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
	      rect: [209,45,590,152],
	      id: 'bg',
	      stroke: [0,'rgb(0, 0, 0)','none'],
	      type: 'rect',
	      fill: ['rgba(137,138,87,1)']
	   },
	   {
	      rect: [409,12,267,47],
	      borderRadius: ['0px 0px',0,0,0],
	      id: 'box',
	      stroke: [0,'rgb(0, 0, 0)','none'],
	      type: 'rect',
	      fill: ['rgba(90,89,80,1)']
	   },
	   {
	      id: 'watcherLeft',
	      type: 'rect',
	      rect: [40,41,0,0]
	   },
	   {
	      id: 'watcherRight',
	      type: 'rect',
	      rect: [41,41,0,0]
	   },
	   {
	      id: 'speaker',
	      type: 'rect',
	      rect: [133,-109,0,0]
	   }],
	   symbolInstances: [
	   {
	      id: 'watcherRight',
	      symbolName: 'watcherLeft'
	   },
	   {
	      id: 'speaker',
	      symbolName: 'watcher'
	   },
	   {
	      id: 'watcherLeft',
	      symbolName: 'watcherLeft'
	   }   ]
	   },
	   states: {
	      "Base State": {
	         "${_bg}": [
	            ["color", "background-color", 'rgba(87,161,4,1.00)'],
	            ["transform", "translateX", '40px'],
	            ["style", "height", '152px'],
	            ["transform", "translateY", '0px'],
	            ["style", "width", '550px']
	         ],
	         "${_speaker}": [
	            ["transform", "translateX", '34px'],
	            ["transform", "translateY", '109px'],
	            ["transform", "rotateZ", '0deg']
	         ],
	         "${symbolSelector}": [
	            ["style", "height", '216px'],
	            ["style", "width", '1070px']
	         ],
	         "${_watcherRight}": [
	            ["transform", "scaleX", '-1'],
	            ["transform", "translateY", '0px'],
	            ["transform", "translateX", '875px']
	         ],
	         "${_watcherLeft}": [
	            ["transform", "translateX", '-41px'],
	            ["transform", "translateY", '12px']
	         ],
	         "${_box}": [
	            ["style", "border-bottom-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
	            ["transform", "translateX", '-10px'],
	            ["style", "border-bottom-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
	            ["style", "border-top-left-radius", [123,123], {valueTemplate:'@@0@@px @@1@@px'} ],
	            ["style", "border-top-right-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
	            ["transform", "translateY", '5px']
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
	            { id: "eid176", tween: [ "transform", "${_box}", "translateX", '-10px', { fromValue: '-10px'}], position: 0, duration: 0 },
	            { id: "eid155", tween: [ "transform", "${_watcherLeft}", "translateX", '-41px', { fromValue: '-41px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid127", tween: [ "color", "${_bg}", "background-color", 'rgba(87,161,4,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(87,161,4,1.00)'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid129", tween: [ "style", "${_bg}", "width", '550px', { fromValue: '550px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid177", tween: [ "transform", "${_box}", "translateY", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
	            { id: "eid149", tween: [ "transform", "${_watcherRight}", "translateX", '875px', { fromValue: '875px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid156", tween: [ "transform", "${_watcherLeft}", "translateY", '12px', { fromValue: '12px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid191", tween: [ "transform", "${_speaker}", "rotateZ", '-34deg', { fromValue: '0deg'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
	            { id: "eid194", tween: [ "transform", "${_speaker}", "rotateZ", '0deg', { fromValue: '-34deg'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
	            { id: "eid150", tween: [ "transform", "${_watcherRight}", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid128", tween: [ "transform", "${_bg}", "translateX", '40px', { fromValue: '40px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid175", tween: [ "style", "${_box}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
	            { id: "eid148", tween: [ "transform", "${_watcherRight}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0, easing: "easeInOutQuad" },
	            { id: "eid187", tween: [ "transform", "${_speaker}", "translateX", '209px', { fromValue: '34px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
	            { id: "eid189", tween: [ "transform", "${_speaker}", "translateX", '233px', { fromValue: '209px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
	            { id: "eid192", tween: [ "transform", "${_speaker}", "translateX", '367.337px', { fromValue: '233px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
	            { id: "eid174", tween: [ "style", "${_box}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
	            { id: "eid178", tween: [ "style", "${_box}", "border-top-left-radius", [123,123], { valueTemplate: '@@0@@px @@1@@px', fromValue: [123,123]}], position: 0, duration: 0 },
	            { id: "eid190", tween: [ "transform", "${_speaker}", "translateY", '74px', { fromValue: '109px'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
	            { id: "eid193", tween: [ "transform", "${_speaker}", "translateY", '62px', { fromValue: '74px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
	            { id: "eid173", tween: [ "style", "${_box}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 }         ]
	      }
	   }
	}
};