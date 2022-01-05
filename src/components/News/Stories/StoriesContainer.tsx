import { connect } from 'react-redux'
import {Stories} from './Stories';
import {AppStateType} from '../../../redux/redux-store';
import {FeedStoriesType} from '../../../redux/feed-reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    feedStories: FeedStoriesType
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        feedStories: state.newsPage.feedStories
    }
}
type MapDispatchPropsType = {

}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {

    }
}

export const StoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Stories)