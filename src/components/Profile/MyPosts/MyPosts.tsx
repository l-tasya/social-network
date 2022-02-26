import React, {useCallback} from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';
import {PostTextArea} from '../../common/PostTextArea/PostTextArea';
import {addPostAC, ProfilePageType} from '../../../redux/profile-reducer';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/redux-store";


type MyPostsPropsType = {}

const MyPosts: React.FC<MyPostsPropsType> = React.memo(() => {
    //state
    let profilePage = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)
    let userInfo = profilePage.profile
    let post = profilePage.post
    //dispatch
    let dispatch = useDispatch()
    //callbacks
    const addPost = useCallback((text: string) => {
        dispatch(addPostAC(text))
    }, [])
    //map
    let postElements = post.map((t) => <Post key={t.id} id={t.id} message={t.message} img={t.src}
    />).reverse()
    return (
        <div className={s.myPosts}>
            <PostTextArea
                user={userInfo}
                addItem={addPost}
            />
            <div className={s.myPosts__posts}>
                {postElements}
            </div>
        </div>
    );
})
export default MyPosts;