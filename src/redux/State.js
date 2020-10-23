const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SENT_MESSAGE= 'SENT_MESSAGE';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, likeCount: 1, message: "hidasdda"},
                {id: 2, likeCount: 2, message: "hello2121331"},
                {id: 3, likeCount: 3, message: "salom1dassadas"},
                {id: 4, likeCount: 4, message: "saljttasdasd"},
                {id: 5, likeCount: 5, message: "privett"},
                {id: 6, likeCount: 6, message: "Katya poka"},
            ],
            newPostText: 'newText'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Petr"},
                {id: 2, name: "Tolao"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Kostik"},
                {id: 5, name: "Nata"},
                {id: 6, name: "Katya"},
            ],
            messages: [
                {id: 1, message: "hi hello"},
                {id: 2, message: "hi too"},
                {id: 3, message: "heyto"},
                {id: 4, message: "salom"},
                {id: 5, message: "orivet"},
                {id: 6, message: "zdarova"},
            ],
            newMessageBody: '',
        },
        sideBar: {
            friend: [
                {id: 1, name: "Petr", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
                {id: 2, name: "Tolao", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
                {id: 3, name: "Sveta", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('11');
    },
    _addPost() {
        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updatePostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_POST_TEXT) {
            this._updatePostText(action.newText);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        } else if(action.type === SENT_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id:6, message: body})
            this._callSubscriber(this._state)

        }
    },
}
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
export const sendMessageCreator = () => {
    return {
        type: SENT_MESSAGE
    };
};
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    };
};
export default store;
window.store = store;