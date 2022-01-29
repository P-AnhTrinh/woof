
import {
    SET_CURRENT_PAGE
} from './types';


export const updateCurrentPage = (num) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: num
    })
}

