const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, likeCount: 1, message: "hidasdda"},
            {id: 2, likeCount: 2, message: "hello2121331"},
            {id: 3, likeCount: 3, message: "salom1dassadas"},
            {id: 4, likeCount: 4, message: "saljttasdasd"},
            {id: 5, likeCount: 5, message: "privett"},
            {id: 6, likeCount: 6, message: "Katya poka"},
        ],
        newPostText: 'newText'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    };
};

export default profileReducer;