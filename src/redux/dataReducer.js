

import {
    SET_CURRENT_PAGE,
    SET_LOADING,
    SET_CHATID,
    SET_USERID, 
    SET_USER
} from './types';


const initialState = {
    currentPage: 0,
    loading: false, 
    userId: null, 
    chatId: null, 
    user: null
}


export default function(state = initialState, action) {
    switch(action.type){
        case SET_CURRENT_PAGE: {
            return {
                ...state, 
                currentPage: action.payload
            }
        }
        case SET_USER: {
            return {
                ...state, 
                user: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state, 
                loading: action.payload
            }
        }
        case SET_USERID: {
            return {
                ...state, 
                userId: action.payload
            }
        }
        case SET_CHATID: {
            return {
                ...state, 
                chatId: action.payload
            }
        }
        default: 
            return state;
    }
}


