import WindowsService from '../../services/WindowsService';

function loadWindows() {
  return async (dispatch) => {
    const firstState = await WindowsService.getWindows();
    dispatch({ type: 'loadWindows', payload: firstState })
  }
}

function updateWindow(newWindow) {
  return async (dispatch) => {
    const updatedWindow = await WindowsService.update(newWindow);
    dispatch({ type: 'updateWindow', payload: updatedWindow })
  }
}

// function closeWindow(windowName) {
//   return dispatch => dispatch({ type: 'closeWindow', payload: { windowName } })
// }
const closeWindow = (windowName) => dispatch => dispatch({ type: 'closeWindow', payload: windowName })

function addWindow(zIndex) {
  return async (dispatch) => {
    const newWindow = await WindowsService.getEmpty();
    newWindow.zIndex = zIndex;
    dispatch({ type: 'addNewWindow', payload: newWindow })
  }
}

export default {
  loadWindows,
  updateWindow,
  closeWindow,
  addWindow
}