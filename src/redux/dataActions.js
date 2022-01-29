
import {
    SET_CURRENT_PAGE
} from './types';





export const signupUser = () => () => {

    // const usersRef = collection(db, "users")

    // const getUsers = async () => {
    //     const data = await getDocs(usersRef)
    //     console.log(data.docs)
    // }

    // getUsers()

}

export const updateCurrentPage = (num) => (dispatch) => {
    dispatch({
        type: SET_CURRENT_PAGE,
        payload: num
    })
}

