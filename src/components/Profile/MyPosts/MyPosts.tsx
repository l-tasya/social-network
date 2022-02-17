import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';
import {PostTextArea} from '../../common/PostTextArea/PostTextArea';
import {addPostAC, profileInputChangeAC, ProfilePageType} from '../../../redux/profile-reducer';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/redux-store";


type MyPostsPropsType = {
}

const MyPosts: React.FC<MyPostsPropsType> = () => {
    //state
    let profilePage = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)
    let userInfo = profilePage.profile
    let post = profilePage.post
    let newPostText = profilePage.newPostText
    //dispatch
    let dispatch = useDispatch()
    //callbacks
    const addPost = () =>{
        dispatch(addPostAC(1))
    }
    const onPostChange = (text: string) => {
        dispatch(profileInputChangeAC(text))
    }
    //map
    let postElements = post.map((t) => <Post key={t.id} id={t.id} message={t.message} img={t.src}
    />).reverse()
    return (
        <div className={s.myPosts}>
            <PostTextArea
                value={newPostText}
                user={userInfo}
                addItem={addPost}
                onChangeText={onPostChange}
            />
            <div className={s.myPosts__posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;