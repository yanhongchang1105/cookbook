import { SWITCHTAB } from './actionTypes'
import store from 'store' //存到缓存里
let checked = store.get('map')
const defaultState = {
    checked: checked !== undefined ? checked : true
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCHTAB:
            store.set('map', action.checked)
            return {
                checked: action.checked
            }
            break;

        default:
            return state
    }
}
export default reducer