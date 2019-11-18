import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { Map } from 'immutable'
const initState = Map({})  //initialState 需要是 immutable 的
// 如果你不传递 initialState，redux-immutable也会帮助你在 store 初始化的时候，通过每个子 reducer 的初始值
// 来构建一个全局 Map 作为全局 state。当然，这要求你的每个子 reducer 的默认初始值是 immutable的。
const store = createStore(
    reducer, initState, applyMiddleware(thunk)
)
export default store