import {addPostAC, PostsType, profileInputChangeAC, UserInfoType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';


type MapStatePropsType = {
    userInfo: UserInfoType
    newPostText: string
    post: PostsType
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userInfo: state.profilePage.userInfo,
        newPostText: state.profilePage.newPostText,
        post: state.profilePage.post
    }
}

type MapDispatchToProps = {
    onPostChange: (text: string) => void
    addPost: () => void
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onPostChange: (text: string) => {
            dispatch(profileInputChangeAC(text))
        },
        addPost: () => {
            dispatch(addPostAC(1))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;