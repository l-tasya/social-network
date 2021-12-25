import React from 'react';
import {PostTextArea} from '../common/PostTextArea/PostTextArea';
import {ActionsType, addFeedPostAC, feedInputChangeAC, NewsPageType} from '../../redux/state';
import s from './News.module.scss';
import Post from '../Profile/MyPosts/Post/Post';

type NewsPropsType = {
    dispatch: (action: ActionsType) => void
    state: NewsPageType
}

const News: React.FC<NewsPropsType> = ({dispatch, state}) => {
    return (
        <div className={s.feed}>
            {/*<Stories/>*/}
            <PostTextArea value={state.feedNewPostText}
                          onChangeText={(text) => dispatch(feedInputChangeAC(text))}
                          user={state.userInfo}
                          addItem={() => dispatch(addFeedPostAC(1))}/>
            {
                state.feedPosts.map(t => <Post key={t.id} message={t.message} img={t.src} id={t.id}/>).reverse()
            }
        </div>
    )
}
export default News

