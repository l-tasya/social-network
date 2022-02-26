import React, {useCallback} from 'react';
import {PostTextArea} from '../common/PostTextArea/PostTextArea';
import s from './News.module.scss';
import Post from '../Profile/MyPosts/Post/Post';
import {ProfileUserType} from '../../redux/profile-reducer';
import {addFeedPostAC, NewsPageType} from '../../redux/feed-reducer';
import {StoriesContainer} from './Stories/StoriesContainer';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/redux-store";


const News: React.FC = React.memo(() => {
    console.log('news')
    //state
    let newsPage = useSelector<AppStateType, NewsPageType>(state => state.newsPage)
    let userInfo = useSelector<AppStateType, ProfileUserType | null>(state => state.profilePage.profile)
    let feedPost = newsPage.feedPosts
    //dispatch
    const dispatch = useDispatch()

    const onItemAddClick = useCallback((text: string) => {
        dispatch(addFeedPostAC(text))
    },[])
    return (
        <div className={s.feed}>
            <StoriesContainer/>
            <PostTextArea
                user={userInfo}
                addItem={onItemAddClick}/>
            {
                feedPost.map(t => <Post key={t.id} message={t.message} img={t.src} id={t.id}/>).reverse()
            }
        </div>
    )
})
export default News

