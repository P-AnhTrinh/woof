

import {
    SET_CURRENT_PAGE
} from './types';


const initialState = {
    currentPage: 0
}


export default function(state = initialState, action) {
    switch(action.type){
        case SET_CURRENT_PAGE: {
            return {
                ...state, 
                currentPage: action.payload
            }
        }
        default: 
            return state;
    }
}


