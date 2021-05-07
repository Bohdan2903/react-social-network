import {profileAPI, usersAPI} from "../Api/Api";
import {toggleIsFetching} from "./auth-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE= 'SET_USER_PROFILE';
const SET_STATUS= 'SET_STATUS';

let initialState = {
        posts: [
            {id: 1, likeCount: 1, message: "hidasdda"},
            {id: 2, likeCount: 2, message: "hello2121331"},
            {id: 3, likeCount: 3, message: "salom1dassadas"},
            {id: 4, likeCount: 4, message: "saljttasdasd"},
            {id: 5, likeCount: 5, message: "privett"},
            {id: 6, likeCount: 6, message: "Katya poka"},
        ],
        newPostText: 'newText',
        profile: null,
    status:'',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 1,
                message: state.newPostText,
                likeCount: 2
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''

            };
        }

        case UPDATE_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            };
        }

        default: return state;
    }
};

export const addPostAction = () => {
    return {
        type: ADD_POST
    };
};

export const updatePostTextAction = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    };
};
export const setUserProfileAction = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    };
};
export const getProfile = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true));
        profileAPI.getProfile(userId).then((data) => {
            dispatch(setUserProfileAction(data));
        });
    }
}
export const getStatus = (userId) =>{
    return (dispatch) =>{
        profileAPI.getStatus(userId).then((data) => {
            dispatch(setStatus(data));
        });
    }
}
export const updateStatus = (status) =>{
    return (dispatch) =>{
        profileAPI.updateStatus(status).then((data) => {
            if(data.resultCode ===0){
                dispatch(setStatus(status));
            }

        });
    }
}
export default profileReducer;