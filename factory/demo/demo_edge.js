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
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'demo',
            type:'rect',
            rect:[-256,176,0,0]
         }],
         symbolInstances: [
         {
            id:'demo',
            symbolName:'demo'
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
         "${_demo}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '29px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid66", tween: [ "transform", "${_demo}", "scaleY", '3.26', { fromValue: '1'}], position: 750, duration: 1250 },
            { id: "eid65", tween: [ "transform", "${_demo}", "scaleX", '3.26', { fromValue: '1'}], position: 750, duration: 1250 }         ]
      }
   }
},
"human": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [1107,205,369,697],
      transform: [[21,0],[0,0],[0],[1,1]],
      id: 'ddl-human',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)'],
      c: [
      {
         transform: [[-374,12]],
         type: 'image',
         id: 'ddp-body',
         rect: [65,262,794,1123],
         clip: ['rect(74px 594px 298px 400px)'],
         fill: ['rgba(0,0,0,0)','images/girl.svg']
      },
      {
         transform: [[-498,120]],
         type: 'image',
         id: 'ddp-right-foot',
         rect: [65,262,794,1123],
         clip: ['rect(185px 698px 330px 623px)'],
         fill: ['rgba(0,0,0,0)','images/girl.svg']
      },
      {
         transform: [[-568,121]],
         type: 'image',
         id: 'ddp-left-foot',
         rect: [65,262,794,1123],
         clip: ['rect(185px 698px 330px 623px)'],
         fill: ['rgba(0,0,0,0)','images/girl.svg']
      },
      {
         transform: [[-576,87]],
         type: 'image',
         id: 'ddp-left-arm',
         rect: [65,262,794,1123],
         clip: ['rect(30px 691px 179px 618px)'],
         fill: ['rgba(0,0,0,0)','images/girl.svg']
      },
      {
         transform: [[-491,82],[-60]],
         type: 'image',
         id: 'ddp-right-arm',
         rect: [65,262,794,1123],
         clip: ['rect(30px 691px 179px 618px)'],
         fill: ['rgba(0,0,0,0)','images/girl.svg']
      },
      {
         transform: [[-85,-262]],
         type: 'image',
         id: 'ddp-head',
         rect: [65,262,794,1123],
         clip: ['rect(7px 380px 368px 22px)'],
         fill: ['rgba(0,0,0,0)','images/girl.svg']
      },
      {
         transform: [[23,-158]],
         type: 'image',
         id: 'ddp-expression',
         rect: [48,318,794,1123],
         clip: ['rect(0px 225px 201px 0px)'],
         fill: ['rgba(0,0,0,0)','images/expression2.svg']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_ddp-left-arm}": [
            ["style", "-webkit-transform-origin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-576.63px'],
            ["transform", "rotateZ", '60deg'],
            ["transform", "translateY", '87.27px'],
            ["style", "clip", [30,691,179,618], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_ddp-left-foot}": [
            ["style", "-webkit-transform-origin", [83,16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-568.2px'],
            ["transform", "rotateZ", '15deg'],
            ["style", "clip", [185,698,330,623], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '116.33px']
         ],
         "${_ddp-expression}": [
            ["style", "clip", [0,225,201,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-158.92px'],
            ["transform", "translateX", '23.33px']
         ],
         "${_ddp-right-arm}": [
            ["style", "-webkit-transform-origin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-491.5px'],
            ["transform", "rotateZ", '-60deg'],
            ["transform", "translateY", '82.74px'],
            ["style", "clip", [28,690,178,616], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_ddp-right-foot}": [
            ["style", "-webkit-transform-origin", [83,16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-498.2px'],
            ["transform", "rotateZ", '-15deg'],
            ["transform", "translateY", '120.33px'],
            ["style", "clip", [185,698,330,623], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '1846.57557px'],
            ["style", "width", '2367.832463px']
         ],
         "${_ddp-body}": [
            ["style", "clip", [74,594,298,400], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '12.33px'],
            ["transform", "translateX", '-374.2px']
         ],
         "${_ddl-human}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "translateX", '21.33px'],
            ["style", "height", '697px'],
            ["transform", "translateY", '0.84px'],
            ["style", "width", '369px']
         ],
         "${_ddp-head}": [
            ["style", "clip", [7,380,368,22], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-262.66px'],
            ["transform", "translateX", '-85.2px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid62", tween: [ "transform", "${_ddp-left-arm}", "rotateZ", '90deg', { fromValue: '60deg'}], position: 0, duration: 250 },
            { id: "eid70", tween: [ "transform", "${_ddp-left-arm}", "rotateZ", '60deg', { fromValue: '90deg'}], position: 250, duration: 250 },
            { id: "eid137", tween: [ "transform", "${_ddp-right-arm}", "rotateZ", '-90deg', { fromValue: '-60deg'}], position: 0, duration: 250 },
            { id: "eid138", tween: [ "transform", "${_ddp-right-arm}", "rotateZ", '-60deg', { fromValue: '-90deg'}], position: 250, duration: 250 },
            { id: "eid127", tween: [ "style", "${_ddp-left-arm}", "-webkit-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid68", tween: [ "style", "${_ddp-left-arm}", "-moz-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid69", tween: [ "style", "${_ddp-left-arm}", "-ms-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "style", "${_ddp-left-arm}", "msTransformOrigin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid72", tween: [ "style", "${_ddp-left-arm}", "-o-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 }         ]
      }
   }
},
"demo": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'human',
      type: 'rect',
      rect: [603,-5,0,0]
   },
   {
      id: 'humanCopy',
      type: 'rect',
      rect: [603,-5,0,0]
   }],
   symbolInstances: [
   {
      id: 'humanCopy',
      symbolName: 'human'
   },
   {
      id: 'human',
      symbolName: 'human'
   }   ]
   },
   states: {
      "Base State": {
         "${_human}": [
            ["style", "-webkit-transform-origin", [48,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-1580.46px'],
            ["transform", "scaleX", '0.14'],
            ["transform", "scaleY", '0.14'],
            ["style", "clip", [186,1510,934,1118], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-152.97px']
         ],
         "${_humanCopy}": [
            ["style", "-webkit-transform-origin", [48,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [48,10],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-910.45px'],
            ["style", "-ms-transform-origin", [48,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "scaleX", '0.14'],
            ["style", "-moz-transform-origin", [48,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-o-transform-origin", [48,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "scaleY", '0.14'],
            ["style", "msTransformOrigin", [48,10], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "translateY", '-152.97px'],
            ["style", "clip", [186,1510,934,1118], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${symbolSelector}": [
            ["style", "height", '258.939698px'],
            ["style", "width", '1002.132257px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1010,
         autoPlay: true,
         timeline: [
            { id: "eid63", tween: [ "transform", "${_human}", "translateX", '-1286.46px', { fromValue: '-1580.46px'}], position: 0, duration: 1010 },
            { id: "eid64", tween: [ "transform", "${_humanCopy}", "translateX", '-1224.45px', { fromValue: '-910.45px'}], position: 0, duration: 1010 }         ]
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
})(jQuery, AdobeEdge, "EDGE-10523123");
