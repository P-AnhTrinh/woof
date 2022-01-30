
import {auth} from '../firebaseConfig';
import {
    SET_CURRENT_PAGE,
    SET_LOADING,
    SET_CHATID,
    SET_USERID,
    SET_USER
} from './types';

export const setUserId = (id) => (dispatch) => {
    dispatch({
        type: SET_USERID,
        payload: id
    })
}

export const setUser = (obj) => (dispatch) => {
    dispatch({
        type: SET_USER,
        payload: obj
    })
}


export const setChatId= (id) => (dispatch) => {
    dispatch({
        type: SET_CHATID,
        payload: id
    })
}


export const updateCurrentPage = (num) => (dispatch) => {    
    if (num == 5){
        num = 0
        setUserId(null)
        setUser(null)
        auth.signOut()

    }
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: num
    })
}

export const setLoading = (value) => (dispatch) => {
    dispatch({
        type: SET_LOADING,
        payload: value
    })
}
