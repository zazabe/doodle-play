/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
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
            id:'scene2',
            type:'rect',
            rect:[-249,203,0,0]
         }],
         symbolInstances: [
         {
            id:'scene2',
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
         "${_RoundRect}": [
            ["style", "border-top-left-radius", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ]
         ],
         "${_scene2}": [
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
            { id: "eid201", tween: [ "transform", "${_scene2}", "translateY", '276px', { fromValue: '0px'}], position: 5250, duration: 3750, easing: "easeInOutQuad" },
            { id: "eid200", tween: [ "transform", "${_scene2}", "translateX", '2px', { fromValue: '0px'}], position: 5250, duration: 3750, easing: "easeInOutQuad" },
            { id: "eid199", tween: [ "transform", "${_scene2}", "scaleY", '2.68', { fromValue: '1'}], position: 5250, duration: 3750, easing: "easeInOutQuad" },
            { id: "eid198", tween: [ "transform", "${_scene2}", "scaleX", '2.68', { fromValue: '1'}], position: 5250, duration: 3750, easing: "easeInOutQuad" }         ]
      }
   }
},
"doodle-animal": {
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
},
"animalLeft": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'ddl-animal_4',
      type: 'rect',
      rect: [351,-18,0,0]
   },
   {
      id: 'ddl-animal_3',
      type: 'rect',
      rect: [351,-18,0,0]
   },
   {
      id: 'ddl-animal_2',
      type: 'rect',
      rect: [351,-18,0,0]
   },
   {
      id: 'ddl-animal_1',
      type: 'rect',
      rect: [351,-18,0,0]
   }],
   symbolInstances: [
   {
      id: 'ddl-animal_3',
      symbolName: 'doodle-animal'
   },
   {
      id: 'ddl-animal_1',
      symbolName: 'doodle-animal'
   },
   {
      id: 'ddl-animal_4',
      symbolName: 'doodle-animal'
   },
   {
      id: 'ddl-animal_2',
      symbolName: 'doodle-animal'
   }   ]
   },
   states: {
      "Base State": {
         "${_ddl-animal_4}": [
            ["transform", "scaleX", '0.707'],
            ["transform", "translateY", '9.376px'],
            ["transform", "translateX", '-251.522px'],
            ["transform", "scaleY", '0.707']
         ],
         "${symbolSelector}": [
            ["style", "height", '163.695999px'],
            ["style", "width", '155.509987px']
         ],
         "${_ddl-animal_2}": [
            ["transform", "scaleX", '1.203'],
            ["transform", "translateY", '47.496px'],
            ["transform", "translateX", '-328.402px'],
            ["transform", "scaleY", '1.203']
         ],
         "${_ddl-animal_3}": [
            ["transform", "translateX", '-270px'],
            ["transform", "translateY", '26px']
         ],
         "${_ddl-animal_1}": [
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
            { id: "eid120", tween: [ "transform", "${_ddl-animal_1}", "translateY", '93.776px', { fromValue: '116.224px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
            { id: "eid114", tween: [ "transform", "${_ddl-animal_4}", "translateY", '3.375px', { fromValue: '9.376px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
            { id: "eid116", tween: [ "transform", "${_ddl-animal_3}", "translateY", '22px', { fromValue: '26px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
            { id: "eid113", tween: [ "transform", "${_ddl-animal_4}", "translateX", '29.477px', { fromValue: '-251.522px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
            { id: "eid117", tween: [ "transform", "${_ddl-animal_2}", "translateX", '19.597px', { fromValue: '-328.402px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
            { id: "eid118", tween: [ "transform", "${_ddl-animal_2}", "translateY", '54.495px', { fromValue: '47.496px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
            { id: "eid115", tween: [ "transform", "${_ddl-animal_3}", "translateX", '52px', { fromValue: '-270px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" },
            { id: "eid119", tween: [ "transform", "${_ddl-animal_1}", "translateX", '78.477px', { fromValue: '-300.477px'}], position: 1500, duration: 2500, easing: "easeInOutQuad" }         ]
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
      id: 'animalLeft',
      type: 'rect',
      rect: [40,41,0,0]
   },
   {
      id: 'animalRight',
      type: 'rect',
      rect: [41,41,0,0]
   },
   {
      id: 'ddl-animal-main',
      type: 'rect',
      rect: [133,-109,0,0]
   }],
   symbolInstances: [
   {
      id: 'animalRight',
      symbolName: 'animalLeft'
   },
   {
      id: 'ddl-animal-main',
      symbolName: 'doodle-animal'
   },
   {
      id: 'animalLeft',
      symbolName: 'animalLeft'
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
         "${_ddl-animal-main}": [
            ["transform", "translateX", '34px'],
            ["transform", "translateY", '109px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '216px'],
            ["style", "width", '1070px']
         ],
         "${_animalRight}": [
            ["transform", "scaleX", '-1'],
            ["transform", "translateY", '0px'],
            ["transform", "translateX", '875px']
         ],
         "${_animalLeft}": [
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
            { id: "eid155", tween: [ "transform", "${_animalLeft}", "translateX", '-41px', { fromValue: '-41px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid127", tween: [ "color", "${_bg}", "background-color", 'rgba(87,161,4,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(87,161,4,1.00)'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid129", tween: [ "style", "${_bg}", "width", '550px', { fromValue: '550px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid177", tween: [ "transform", "${_box}", "translateY", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "transform", "${_animalRight}", "translateX", '875px', { fromValue: '875px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid156", tween: [ "transform", "${_animalLeft}", "translateY", '12px', { fromValue: '12px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid191", tween: [ "transform", "${_ddl-animal-main}", "rotateZ", '-34deg', { fromValue: '0deg'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid194", tween: [ "transform", "${_ddl-animal-main}", "rotateZ", '0deg', { fromValue: '-34deg'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid150", tween: [ "transform", "${_animalRight}", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid128", tween: [ "transform", "${_bg}", "translateX", '40px', { fromValue: '40px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid175", tween: [ "style", "${_box}", "border-bottom-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "transform", "${_animalRight}", "scaleX", '-1', { fromValue: '-1'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid187", tween: [ "transform", "${_ddl-animal-main}", "translateX", '209px', { fromValue: '34px'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
            { id: "eid189", tween: [ "transform", "${_ddl-animal-main}", "translateX", '233px', { fromValue: '209px'}], position: 1000, duration: 500, easing: "easeInOutQuad" },
            { id: "eid192", tween: [ "transform", "${_ddl-animal-main}", "translateX", '367.337px', { fromValue: '233px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid174", tween: [ "style", "${_box}", "border-top-right-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid178", tween: [ "style", "${_box}", "border-top-left-radius", [123,123], { valueTemplate: '@@0@@px @@1@@px', fromValue: [123,123]}], position: 0, duration: 0 },
            { id: "eid190", tween: [ "transform", "${_ddl-animal-main}", "translateY", '74px', { fromValue: '109px'}], position: 0, duration: 1500, easing: "easeInOutQuad" },
            { id: "eid193", tween: [ "transform", "${_ddl-animal-main}", "translateY", '62px', { fromValue: '74px'}], position: 1500, duration: 500, easing: "easeInOutQuad" },
            { id: "eid173", tween: [ "style", "${_box}", "border-bottom-left-radius", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "meeting-2");
