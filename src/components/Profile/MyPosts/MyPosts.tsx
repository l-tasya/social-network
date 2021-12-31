import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';
import {PostsType, UserInfoType} from '../../../redux/state';
import {PostTextArea} from '../../common/PostTextArea/PostTextArea';


type MyPostsPropsType = {
    post: PostsType
    newPostText: string
    userInfo: UserInfoType
    addPost: ()=>void
    onPostChange: (text: string)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = ({post,newPostText, userInfo, addPost, onPostChange}) => {
    //converting post state to Post component
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