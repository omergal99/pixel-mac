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
      isExpend: false,
      isDraging: false
    }
  }
}

export default (state = initialState, action) => {
  // console.log('reducer: WINDOWS state: ', state, ", action.type: ", action)
  var copy;
  switch (action.type) {
    case 'loadWindows':
      return action.payload;
    case 'updateWindow':
      copy = JSON.parse(JSON.stringify(state));
      copy.windows[action.payload.name] = action.payload;
      return copy;
    case 'closeWindow':
      copy = JSON.parse(JSON.stringify(state));
      delete copy.windows[action.payload];
      return copy;
    case 'addNewWindow':
      copy = JSON.parse(JSON.stringify(state));
      copy.windows[action.payload.name] = action.payload;
      return copy;
    default:
      return state;
  }
}

