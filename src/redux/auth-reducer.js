import {authAPI} from "../Api/Api";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    usersId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default: return state;
    }
};

export const setAuthUsersData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    };
};

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    };
};
export const getAuthData = () => {
    return (dispatch) =>{
        dispatch(toggleIsFetching(true));
        authAPI.authMe().then((data) => {
            dispatch(toggleIsFetching(false));
            let {id,email,login} = data.data;
            dispatch(setAuthUsersData(id, email, login));
        });
    }
}
export default authReducer;