import { CHANGE_COLOR } from '../actions/types';

export default (state = 'green', action) => {
    switch (action.type) {
        case CHANGE_COLOR:
            return action.payload;
        default:
            return state
    };
};