(function(lib){

lib.setup({
	config: {
		url:   'res/'
	},
	scenes: {
		background: ['blank', 'landscape'],
		symbols: {
			announcement: {
				doodles: {
					speaker: {
						type: 'human'
					},
					message: {
                       type: 'bubble'
                    }
				},
                symbol: null
			},
			meeting: {
				doodles: {
					speaker: {
						type:  'animal'
					},
					watcher: {
						type: 'animal'
					},
					message: {
					   type: 'bubble'
                    }
				},
				symbol: null
			}
		}
	},
	doodles: {
		parts: {
			head: {
				type: ['pig', 'cow', 'sheep', 'girl'],
				size: { width: 400, height: 400 }
			},
			face: {
				type: ['default'],
				size: { width: 200, height: 200 }
			},
			text: {}
        },
		symbols: {
			animal: {
				type: ['pig', 'sheep', 'cow'],
				part: ['head', 'face'],
				size: { width: 400, height: 600 }
			},
			human: {
				type: ['girl'],
				part: ['head', 'face'],
                size: { width: 400, height: 400 }
			},
			bubble: {
                type: ['speaking'],
                part: ['text'],
                size: { width: 200, height: 100 }
            }
		}
	}

});
	
})($.DoodlePlay.Library)
