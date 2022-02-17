import {combineReducers, createStore} from 'redux';
import {addPostAC, profileInputChangeAC, profileReducer, setUserProfileAC} from '../profile-reducer';
import {addFeedPostAC, feedInputChangeAC, feedReducer} from '../feed-reducer';
import {dialogInputChangeAC, dialogsReducer, fakeDialogsAC, sendMessageAC} from '../dialogs-reducer';
import {
    changeCurrentPageAC,
    changeTotalUserAC,
    setUsersAC,
    toggleFollowAC,
    toggleIsFetchingAC,
    userReducer
} from '../user-reducer';

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof dialogInputChangeAC>
    | ReturnType<typeof profileInputChangeAC>
    | ReturnType<typeof fakeDialogsAC>
    | ReturnType<typeof addFeedPostAC>
    | ReturnType<typeof feedInputChangeAC>
    | ReturnType<typeof toggleFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof changeCurrentPageAC>
    | ReturnType<typeof changeTotalUserAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof setUserProfileAC>


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    newsPage: feedReducer,
    usersPage: userReducer,
})

let store = createStore(reducers);
console.log(store.getState())
export type ReduxStoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>
export default store