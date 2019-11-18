import { combineReducers } from 'redux-immutable'
import { reducer as list } from 'pages/home/cookBook/'
import { reducer as switchTab } from '../pages/home/layout'
export default combineReducers({
    cookbook: list,
    profile: switchTab
})