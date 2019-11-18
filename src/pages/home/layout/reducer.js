import { SWITCHTAB } from './actionTypes'
import { Map } from 'immutable'
import store from 'store' //存到缓存里
let checked = store.get('map')
const defaultState = Map({
    checked: checked !== undefined ? checked : true
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCHTAB:
            store.set('map', action.checked)
            return state.set('checked', action.checked)
        default:
            return state
    }
}
export default reducer