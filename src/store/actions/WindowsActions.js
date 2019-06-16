import WindowsService from '../../services/WindowsService';

function loadWindows() {
  return async (dispatch) => {
    const firstState = await WindowsService.getWindows();
    dispatch({ type: 'loadWindows', payload: { windows: firstState } })
  }
}

function updateWindow(newWindow) {
  return async (dispatch) => {
    const updatedWindow = await WindowsService.updateWindow(newWindow);
    dispatch({ type: 'updateWindow', payload: { updatedWindow } })
  }
}

// function closeWindow(windowName) {
//   return dispatch => dispatch({ type: 'closeWindow', payload: { windowName } })
// }
const closeWindow = (windowName) => dispatch => dispatch({ type: 'closeWindow', payload: { windowName } })


export default {
  loadWindows,
  updateWindow,
  closeWindow
}