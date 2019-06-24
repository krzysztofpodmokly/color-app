import colr from '../apis/colr';
import { CHANGE_COLOR } from './types';

export const loadColor = () => async dispatch => {
    const response = await colr.get('/random')
    dispatch({ type: CHANGE_COLOR, payload: `#${response.data.new_color}` })
};