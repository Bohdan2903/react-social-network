import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state from './redux/State';
import {addPost} from './redux/State';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
         <App state={state} addPost={addPost}/>
    </BrowserRouter>, document.getElementById('root'));
