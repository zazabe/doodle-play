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
                rect:[1746,258,0,0]
             },
             {
                id:'message',
                type:'rect',
                rect:[1302,354,0,0]
             }],
             symbolInstances: [
             {
                id:'message',
                symbolName:'message'
             },
             {
                id:'speaker',
                symbolName:'speaker'
             }
             ]
          },
       states: {
          "Base State": {
             "${_message}": [
                ["style", "opacity", '0'],
                ["transform", "translateY", '-397.99px'],
                ["transform", "translateX", '-719.99px']
             ],
             "${_Stage}": [
                ["style", "height", '768px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1024px']
             ],
             "${_speaker}": [
                ["transform", "translateX", '-1426px'],
                ["transform", "translateY", '-783px']
             ]
          }
       },
       timelines: {
          "Default Timeline": {
             fromState: "Base State",
             toState: "",
             duration: 1750,
             autoPlay: true,
             timeline: [
                { id: "eid22", tween: [ "transform", "${_speaker}", "translateY", '-200px', { fromValue: '-783px'}], position: 0, duration: 500 },
                { id: "eid23", tween: [ "transform", "${_speaker}", "translateY", '-167.99px', { fromValue: '-200px'}], position: 500, duration: 300, easing: "easeOutBounce" },
                { id: "eid19", tween: [ "style", "${_message}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_message}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 500 },
                { id: "eid18", tween: [ "transform", "${_message}", "translateY", '-397.99px', { fromValue: '-397.99px'}], position: 0, duration: 0 },
                { id: "eid17", tween: [ "transform", "${_message}", "translateX", '-719.99px', { fromValue: '-719.99px'}], position: 0, duration: 0 }         ]
          }
       }
    }    
};
