import WindowsStore from './WindowsStore'
import UserStore from './UserStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    windowsStore: WindowsStore,
    userStore: UserStore
});

export default rootReducer;