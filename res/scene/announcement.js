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
                rect:[583,411,0,0]
             },
             {
                id:'message',
                type:'rect',
                rect:[892,349,0,0]
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
             "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "height", '768px'],
                ["style", "width", '1024px']
             ],
             "${_speaker}": [
                ["transform", "translateX", '-928px'],
                ["transform", "translateY", '-140px']
             ],
             "${_message}": [
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
                { id: "eid23", tween: [ "style", "${_message}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_message}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 750 },
                { id: "eid7", tween: [ "transform", "${_speaker}", "translateX", '-247px', { fromValue: '-928px'}], position: 0, duration: 2000 }         ]
          }
       }
    }
};