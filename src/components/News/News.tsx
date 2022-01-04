import React from 'react';
import {PostTextArea} from '../common/PostTextArea/PostTextArea';
import s from './News.module.scss';
import Post from '../Profile/MyPosts/Post/Post';
import {Stories} from './Stories/Stories';
import {UserInfoType} from '../../redux/profile-reducer';
import {FeedPostsType} from '../../redux/feed-reducer';

type NewsPropsType = {
    feedNewPostText: string
    onPostChange: (text: string)=>void
    userInfo: UserInfoType
    onItemAddClick: ()=>void
    feedPost: FeedPostsType
}

const News: React.FC<NewsPropsType> = (props) => {
    return (
        <div className={s.feed}>
            <Stories/>
            <PostTextArea value={props.feedNewPostText}
                          onChangeText={props.onPostChange}
                          user={props.userInfo}
                          addItem={props.onItemAddClick}/>
            {
                props.feedPost.map(t => <Post key={t.id} message={t.message} img={t.src} id={t.id}/>).reverse()
            }
        </div>
    )
}
export default News

