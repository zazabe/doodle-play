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
            id:'human',
            type:'rect',
            rect:[583,411,0,0]
         },
         {
            id:'bubble',
            type:'rect',
            rect:[892,349,0,0]
         }],
         symbolInstances: [
         {
            id:'bubble',
            symbolName:'bubble'
         },
         {
            id:'human',
            symbolName:'human'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
         ],
         "${_human}": [
            ["transform", "translateX", '-928px'],
            ["transform", "translateY", '-140px']
         ],
         "${_bubble}": [
            ["transform", "translateX", '-382.49px'],
            ["transform", "scaleX", '0.805'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-249px'],
            ["transform", "scaleY", '0.805']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid23", tween: [ "style", "${_bubble}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid24", tween: [ "style", "${_bubble}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 750 },
            { id: "eid7", tween: [ "transform", "${_human}", "translateX", '-247px', { fromValue: '-928px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"bubble": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-66,-242],[0,0],[0],[1,1]],
      id: 'speaking',
      type: 'image',
      rect: [66,242,600,400],
      fill: ['rgba(0,0,0,0)','images/speaking.svg']
   },
   {
      transform: [[-38,0],[0,0],[0],[1,1]],
      rect: [166,92,362,186],
      type: 'text',
      id: 'text',
      text: 'Doodle forever',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',47,'rgba(0,0,0,1)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text}": [
            ["style", "width", '362px'],
            ["transform", "translateX", '-38px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '47px']
         ],
         "${_speaking}": [
            ["transform", "translateX", '-66px'],
            ["transform", "translateY", '-242px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '600px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
      transform: [[7,-248]],
      type: 'image',
      id: 'head',
      rect: [-7,349,4400,400],
      clip: ['rect(0px 400px 400px 0px)'],
      fill: ['rgba(0,0,0,0)','images/girl-dev2.svg']
   },
   {
      transform: [[21,-221]],
      id: 'body',
      type: 'image',
      rect: [-21,221,400,400],
      fill: ['rgba(0,0,0,0)','images/girl-dev.svg']
   },
   {
      transform: [[5,-57]],
      type: 'image',
      id: 'face',
      rect: [97,157,1800,200],
      clip: ['rect(0px 200px 200px 0px)'],
      fill: ['rgba(0,0,0,0)','images/default-dev.svg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_face}": [
            ["style", "clip", [0,200,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateX", '5px'],
            ["transform", "translateY", '-57px']
         ],
         "${_head}": [
            ["style", "clip", [0,400,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateX", '7px'],
            ["transform", "translateY", '-248px']
         ],
         "${_body}": [
            ["transform", "translateX", '21px'],
            ["transform", "translateY", '-221px']
         ],
         "${symbolSelector}": [
            ["style", "height", '501px'],
            ["style", "width", '4400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-10641985");
