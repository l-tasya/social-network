import React from 'react';
import {ReduxStoreType} from '../../redux/redux-store';
import News from './News';
import {addFeedPostAC, feedInputChangeAC} from '../../redux/feed-reducer';

type NewsContainerPropsType = {
   store: ReduxStoreType
}

const NewsContainer: React.FC<NewsContainerPropsType> = ({store}) => {
    let feedNewPostText = store.getState().newsPage.feedNewPostText
    const onPostChange = (text: string) => store.dispatch(feedInputChangeAC(text))
    let userInfo = store.getState().newsPage.userInfo
    const onItemAddClick = () => store.dispatch(addFeedPostAC(1))
    let feedPost = store.getState().newsPage.feedPosts

    return <News feedPost={feedPost} onItemAddClick={onItemAddClick} userInfo={userInfo} onPostChange={onPostChange} feedNewPostText={feedNewPostText}/>
}
export default NewsContainer

