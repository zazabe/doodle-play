(function(lib){

lib.setup({
	config: {
		url:   'res/'
	},
	scenes: {
		background: ['blank', 'landscape'],
		symbols: {
			basic: {
				doodles: {
					speaker: {
						type: 'human'
					}
				},
				symbol: null
			},
			meeting: {
				doodles: {
					speaker: {
						type: 'animal'
					},
					watcher: {
						type: 'animal'
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
				size: { width: 200, height: 200}
			},
			face: {
				type: ['happy', 'sad'],
				size: { width: 100, height: 100}
			}
		},
		symbols: {
			animal: {
				type: ['pig', 'sheep', 'cow'],
				size: { width: 150, height: 100},
				symbol: null
			},
			human: {
				type: ['girl'],
				size: { width: 200, height: 100},
				symbol: null
			}
		}
	}

});
	
})($.DoodlePlay.Library)
