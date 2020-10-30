import {combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    sideBar: sidebarReducer,
    dialogsPage: dialogsReducer
})
let store = createStore(reducers);

export default store;