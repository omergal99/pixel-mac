const initialState = {
	windows: {
		'window1': {
			id: 201,
			name: 'window1',
			isOpen: true,
			size: { x: 600 + 'px', y: 400 + 'px' },
			prevSize: { x: 600 + 'px', y: 400 + 'px' },
			location: { x: 20, y: 300 },
			prevLocation: { x: 20, y: 300 },
			zIndex: 0,
			isExpend: false
		}
		,
		'window2': {
			id: 202,
			name: 'window2',
			isOpen: true,
			size: { x: 700 + 'px', y: 550 + 'px' },
			prevSize: { x: 700 + 'px', y: 550 + 'px' },
			location: { x: 190, y: 90 },
			prevLocation: { x: 190, y: 90 },
			zIndex: 0,
			isExpend: false
		}
	}
}

function getWindows() {
	return Promise.resolve(initialState);
}

function updateWindow(window) {
	// HTTP REQUEST & ADD ID & UPDATE SUCCEDED
	return Promise.resolve(window);
}

export default {
	getWindows,
	updateWindow
}