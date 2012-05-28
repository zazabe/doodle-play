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
                id:'doodle',
                type:'rect',
                rect:[200,300,0,0]
             }],
             symbolInstances: [
             {
                id:'doodle',
                symbolName:'doodle'
             }
             ]
          },
       states: {
          "Base State": {
             "${_Stage}": [
                ["style", "height", '768px'],
                ["style", "width", '1024px']
             ]
          }
       },
       timelines: {
          "Default Timeline": {
             fromState: "Base State",
             toState: "",
             duration: 0,
             autoPlay: false,
             timeline: []
          }
       }
    }    
};
