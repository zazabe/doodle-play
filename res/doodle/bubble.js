var data = {
    "bubble": {
       version: "0.1.6",
       build: "0.10.0.134",
       baseState: "Base State",
       initialState: "Base State",
       gpuAccelerate: true,
       content: {
       dom: [
       {
          rect: [66,242,600,400],
          transform: [[-66,-242],[0,0],[0],[1,1]],
          id: 'body',
          type: 'rect',
       },
       {
          rect: [200,120,270,135],
          transform: [[-38,0],[0,0],[0],[1,1]],
          font: ['Arial, Helvetica, sans-serif',47,'rgba(0,0,0,1)','normal','none','normal'],
          id: 'text',
          text: 'Doodle forever',
          align: 'center',
          type: 'text'
       }],
       symbolInstances: [
       ]
       },
       states: {
          "Base State": {
             "${_text}": [
                ["style", "font-size", '47px'],
                ["style", "text-align", 'center'],
                ["transform", "translateX", '-38px'],
                ["style", "width", '270px'],
                ["style", "padding", '20px'],
                ["style", "line-height", '1.3em']
             ],
             "${_body}": [
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
    }
};