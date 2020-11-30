// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, likeCount: 1, message: "hidasdda"},
//                 {id: 2, likeCount: 2, message: "hello2121331"},
//                 {id: 3, likeCount: 3, message: "salom1dassadas"},
//                 {id: 4, likeCount: 4, message: "saljttasdasd"},
//                 {id: 5, likeCount: 5, message: "privett"},
//                 {id: 6, likeCount: 6, message: "Katya poka"},
//             ],
//             newPostText: 'newText'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Petr"},
//                 {id: 2, name: "Tolao"},
//                 {id: 3, name: "Sveta"},
//                 {id: 4, name: "Kostik"},
//                 {id: 5, name: "Nata"},
//                 {id: 6, name: "Katya"},
//             ],
//             messages: [
//                 {id: 1, message: "hi hello"},
//                 {id: 2, message: "hi too"},
//                 {id: 3, message: "heyto"},
//                 {id: 4, message: "salom"},
//                 {id: 5, message: "orivet"},
//                 {id: 6, message: "zdarova"},
//             ],
//             newMessageBody: '',
//         },
//         sideBar: {
//             friend: [
//                 {id: 1, name: "Petr", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
//                 {id: 2, name: "Tolao", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'},
//                 {id: 3, name: "Sveta", img: 'https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg'}
//             ]
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     _callSubscriber() {
//         console.log('11');
//     },
//     _addPost() {
//         let newPost = {
//             id: 1,
//             message: this._state.profilePage.newPostText,
//             likeCount: 0
//         };
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = '';
//         this._callSubscriber(this._state);
//     },
//     _updatePostText(newText) {
//         this._state.profilePage.newPostText = newText;
//         this._callSubscriber(this._state);
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sideBar = sidebarReducer(this._state.sideBar, action);
//         this._callSubscriber(this._state);
//     },
// }
//
//
// export default store;
// window.store = store;