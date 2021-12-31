import {combineReducers, createStore } from "redux";
import {profileReducer} from './profile-reducer';
import {feedReducer} from './feed-reducer';
import {dialogsReducer} from './dialogs-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: feedReducer,
})

let store = createStore(reducers);
export type ReduxStoreType = typeof store
export default store