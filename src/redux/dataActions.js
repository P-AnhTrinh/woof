
import {
    SET_CURRENT_PAGE
} from './types';



export const updateCurrentPage = (num) => (dispatch) => {    
    if (num === 5){
        num = 0
    }
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: num
    })
}

