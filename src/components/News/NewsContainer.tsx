import {AppStateType} from '../../redux/redux-store';
import News from './News';
import {addFeedPostAC, feedInputChangeAC, FeedPostsType} from '../../redux/feed-reducer';
import {connect} from 'react-redux';
import {UserInfoType} from '../../redux/profile-reducer';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    feedPost: FeedPostsType
    userInfo: UserInfoType
    feedNewPostText: string
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        feedPost: state.newsPage.feedPosts,
        userInfo: state.newsPage.userInfo,
        feedNewPostText: state.newsPage.feedNewPostText,
    }
}
type MapDispatchPropsType = {
    onItemAddClick: () => void
    onPostChange: (text: string) => void
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onItemAddClick: () => dispatch(addFeedPostAC(1)),
        onPostChange: (text: string) => dispatch(feedInputChangeAC(text))
    }
}


const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer

