const initialState = {
	windows: {
		'window1': {
			id: 201,
			name: 'window1',
			isOpen: true,
			size: { x: 600 + 'px', y: 400 + 'px' },
			prevSize: { x: 600 + 'px', y: 400 + 'px' },
			location: { x: 20, y: 100 },
			prevLocation: { x: 20, y: 100 },
			zIndex: 0,
			isExpend: false,
      isDraging:false
		}
		,
		'window2': {
			id: 202,
			name: 'window2',
			isOpen: true,
			size: { x: 600 + 'px', y: 400 + 'px' },
			prevSize: { x: 600 + 'px', y: 400 + 'px' },
			location: { x: 190, y: 50 },
			prevLocation: { x: 190, y: 50 },
			zIndex: 0,
			isExpend: false,
      isDraging:false
		}
	}
}

var number = 3;

function getWindows() {
	return Promise.resolve(initialState);
}

function update(window) {
	// HTTP REQUEST & ADD ID & UPDATE SUCCEDED
	return Promise.resolve(window);
}

function getEmpty(){
	return {
		id: (200 + number),
		name: `window${number++}`,
		isOpen: true,
		size: { x: 600 + 'px', y: 400 + 'px' },
		prevSize: { x: 600 + 'px', y: 400 + 'px' },
		location: { x: 120, y: 110 },
		prevLocation: { x: 120, y: 110 },
		zIndex: 0,
		isExpend: false,
		isDraging: false
	}
}

export default {
	getWindows,
	update,
	getEmpty
}