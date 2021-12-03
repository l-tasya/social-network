import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, onMessageChange, onPostInputChange, RootStateType, state, subscribe} from './redux/state';

let rerenderEntireTree = (state: RootStateType,)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                changePosts={addPost}
                changeInput={onPostInputChange}
                changeMessage={onMessageChange}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
subscribe(()=>{rerenderEntireTree(state)})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
