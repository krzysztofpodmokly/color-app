let defaultState = {
    color: 'greens'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload };
        default:
            return state
    }
}