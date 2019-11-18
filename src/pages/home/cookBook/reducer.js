const defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'loadData':
            return {
                list: [
                    ...state.list,
                    ...action.list
                ]
            }
        default:
            return state
    }
}