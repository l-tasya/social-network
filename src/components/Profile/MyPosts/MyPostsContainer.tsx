import React from 'react';
import {addPostAC, profileInputChangeAC} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {ReduxStoreType} from '../../../redux/redux-store';


type MyPostsPropsType = {
store: ReduxStoreType
}

const MyPostsContainer: React.FC<MyPostsPropsType> = ({store}) => {
    let posts = store.getState().profilePage.post
    let newPostText = store.getState().profilePage.newPostText
    let userInfoForPost = store.getState().profilePage.userInfo
    const addPost = () =>{
        store.dispatch(addPostAC(1))
    }
    const onPostChange = (text: string) =>{
        store.dispatch(profileInputChangeAC(text))
    }

    return <MyPosts onPostChange={onPostChange} addPost={addPost} userInfo={userInfoForPost} newPostText={newPostText} post={posts}/>

}
export default MyPostsContainer;