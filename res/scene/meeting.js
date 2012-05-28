var data = {
    "stage": {
       version: "0.1.6",
       build: "0.10.0.134",
       baseState: "Base State",
       initialState: "Base State",
       gpuAccelerate: true,
       content: {
             dom: [
             {
                id:'speaker',
                type:'rect',
                rect:[-113,529,0,0]
             },
             {
                id:'watcher2',
                type:'rect',
                rect:[-415,568,0,0]
             },
             {
                id:'watcher1',
                type:'rect',
                rect:[-415,568,0,0]
             },
             {
                id:'watcher3',
                type:'rect',
                rect:[-415,568,0,0]
             },
             {
                id:'watcher4',
                type:'rect',
                rect:[-415,568,0,0]
             },
             {
                id:'message',
                type:'rect',
                rect:[1316,402,0,0],
                transform:[[-742,-465],[0,0],[0],[1,1]]
             }],
             symbolInstances: [
             {
                id:'watcher1',
                symbolName:'watcher'
             },
             {
                id:'speaker',
                symbolName:'speaker'
             },
             {
                id:'message',
                symbolName:'message'
             },
             {
                id:'watcher3',
                symbolName:'watcher'
             },
             {
                id:'watcher2',
                symbolName:'watcher'
             },
             {
                id:'watcher4',
                symbolName:'watcher'
             }
             ]
          },
       states: {
          "Base State": {
             "${_watcher2}": [
                ["transform", "translateX", '-134px'],
                ["transform", "translateY", '-22px']
             ],
             "${_message}": [
                ["style", "opacity", '0'],
                ["transform", "translateY", '-465.99px'],
                ["transform", "translateX", '-742px']
             ],
             "${_watcher1}": [
                ["transform", "translateX", '-44px'],
                ["transform", "translateY", '43.99px']
             ],
             "${_watcher4}": [
                ["transform", "scaleX", '-1'],
                ["transform", "translateY", '13.99px'],
                ["transform", "translateX", '1353.99px']
             ],
             "${_Stage}": [
                ["style", "height", '768px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px']
             ],
             "${_watcher3}": [
                ["transform", "scaleX", '-1'],
                ["transform", "translateY", '1292px'],
                ["transform", "translateX", '215.98px']
             ],
             "${_speaker}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "translateY", '-292px'],
                ["transform", "translateX", '-347.99px'],
                ["transform", "rotateZ", '0deg']
             ]
          }
       },
       timelines: {
          "Default Timeline": {
             fromState: "Base State",
             toState: "",
             duration: 6250,
             autoPlay: true,
             timeline: [
                { id: "eid26", tween: [ "transform", "${_speaker}", "rotateZ", '-22deg', { fromValue: '0deg'}], position: 3000, duration: 500 },
                { id: "eid31", tween: [ "transform", "${_speaker}", "rotateZ", '-25deg', { fromValue: '-22deg'}], position: 3500, duration: 500 },
                { id: "eid37", tween: [ "transform", "${_speaker}", "rotateZ", '1deg', { fromValue: '-25deg'}], position: 4000, duration: 500 },
                { id: "eid88", tween: [ "style", "${_message}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_message}", "opacity", '1', { fromValue: '0'}], position: 5750, duration: 500 },
                { id: "eid64", tween: [ "transform", "${_watcher2}", "translateY", '-18px', { fromValue: '-22px'}], position: 0, duration: 1500 },
                { id: "eid77", tween: [ "transform", "${_watcher2}", "translateY", '-67.99px', { fromValue: '-18px'}], position: 1500, duration: 1000 },
                { id: "eid83", tween: [ "transform", "${_watcher2}", "translateY", '-51.99px', { fromValue: '-67.99px'}], position: 2500, duration: 1500 },
                { id: "eid62", tween: [ "transform", "${_watcher1}", "translateX", '558px', { fromValue: '-44px'}], position: 0, duration: 1500 },
                { id: "eid70", tween: [ "transform", "${_watcher1}", "translateX", '588px', { fromValue: '558px'}], position: 1500, duration: 1000 },
                { id: "eid80", tween: [ "transform", "${_watcher1}", "translateX", '580px', { fromValue: '588px'}], position: 2500, duration: 1500 },
                { id: "eid65", tween: [ "transform", "${_watcher2}", "translateX", '195.99px', { fromValue: '-134px'}], position: 0, duration: 1500 },
                { id: "eid76", tween: [ "transform", "${_watcher2}", "translateX", '285.99px', { fromValue: '195.99px'}], position: 1500, duration: 1000 },
                { id: "eid82", tween: [ "transform", "${_watcher2}", "translateX", '311.98px', { fromValue: '285.99px'}], position: 2500, duration: 1500 },
                { id: "eid25", tween: [ "transform", "${_speaker}", "translateY", '-280px', { fromValue: '-292px'}], position: 1000, duration: 2000 },
                { id: "eid28", tween: [ "transform", "${_speaker}", "translateY", '-356px', { fromValue: '-280px'}], position: 3000, duration: 500 },
                { id: "eid30", tween: [ "transform", "${_speaker}", "translateY", '-413.99px', { fromValue: '-356px'}], position: 3500, duration: 500 },
                { id: "eid36", tween: [ "transform", "${_speaker}", "translateY", '-437.99px', { fromValue: '-413.99px'}], position: 4000, duration: 500 },
                { id: "eid39", tween: [ "transform", "${_speaker}", "translateY", '-435.99px', { fromValue: '-437.99px'}], position: 4500, duration: 1000 },
                { id: "eid24", tween: [ "transform", "${_speaker}", "translateX", '70.01px', { fromValue: '-347.99px'}], position: 1000, duration: 2000 },
                { id: "eid27", tween: [ "transform", "${_speaker}", "translateX", '102.01px', { fromValue: '70.01px'}], position: 3000, duration: 500 },
                { id: "eid29", tween: [ "transform", "${_speaker}", "translateX", '206px', { fromValue: '102.01px'}], position: 3500, duration: 500 },
                { id: "eid35", tween: [ "transform", "${_speaker}", "translateX", '304px', { fromValue: '206px'}], position: 4000, duration: 500 },
                { id: "eid38", tween: [ "transform", "${_speaker}", "translateX", '424px', { fromValue: '304px'}], position: 4500, duration: 1000 },
                { id: "eid63", tween: [ "transform", "${_watcher1}", "translateY", '-32px', { fromValue: '43.99px'}], position: 0, duration: 1500 },
                { id: "eid71", tween: [ "transform", "${_watcher1}", "translateY", '-54px', { fromValue: '-32px'}], position: 1500, duration: 1000 },
                { id: "eid81", tween: [ "transform", "${_watcher1}", "translateY", '-36px', { fromValue: '-54px'}], position: 2500, duration: 1500 },
                { id: "eid67", tween: [ "transform", "${_watcher4}", "translateY", '-53.98px', { fromValue: '13.99px'}], position: 0, duration: 1500 },
                { id: "eid73", tween: [ "transform", "${_watcher4}", "translateY", '-17.99px', { fromValue: '-53.98px'}], position: 1500, duration: 1000 },
                { id: "eid66", tween: [ "transform", "${_watcher4}", "translateX", '801.99px', { fromValue: '1353.99px'}], position: 0, duration: 1500 },
                { id: "eid72", tween: [ "transform", "${_watcher4}", "translateX", '853.99px', { fromValue: '801.99px'}], position: 1500, duration: 1000 },
                { id: "eid78", tween: [ "transform", "${_watcher4}", "translateX", '807.99px', { fromValue: '853.99px'}], position: 2500, duration: 1500 },
                { id: "eid69", tween: [ "transform", "${_watcher3}", "translateY", '-90px', { fromValue: '-92px'}], position: 0, duration: 1500 },
                { id: "eid75", tween: [ "transform", "${_watcher3}", "translateY", '-99.99px', { fromValue: '-90px'}], position: 1500, duration: 1000 },
                { id: "eid68", tween: [ "transform", "${_watcher3}", "translateX", '1140.02px', { fromValue: '1415.98px'}], position: 0, duration: 1500 },
                { id: "eid74", tween: [ "transform", "${_watcher3}", "translateX", '1010.02px', { fromValue: '1140.02px'}], position: 1500, duration: 1000 },
                { id: "eid79", tween: [ "transform", "${_watcher3}", "translateX", '980.02px', { fromValue: '1010.02px'}], position: 2500, duration: 1500 }         ]
          }
       }
    }
};