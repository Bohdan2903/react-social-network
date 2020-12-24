
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";



export const rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});
