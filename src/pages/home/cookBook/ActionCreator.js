import { get } from 'utils/http.js'

const asyncLoadData = () => {
    return async (dispatch) => {
        let list = await get('/api/list');
        dispatch({
            type: 'loadData',
            list: list.data
        })
    }
}
export {
    asyncLoadData
}