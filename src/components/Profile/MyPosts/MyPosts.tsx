import React from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';
import {ActionsType, ProfilePageType} from '../../../redux/state';
import {PostTextArea} from '../../common/PostTextArea/PostTextArea';
import {addPostAC, profileInputChangeAC} from '../../../redux/profile-reducer';


type MyPostsPropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({state, dispatch}) => {
    //converting post state to Post component
    let postElements = state.post.map((t) => <Post key={t.id} id={t.id} message={t.message} img={t.src}
    />).reverse()

    //Flux circulation by textarea value

    return (
        <div className={s.myPosts}>
                <PostTextArea
                    value={state.newPostText}
                    user={state.userInfo}
                    addItem={()=>dispatch(addPostAC(1))}
                    onChangeText={(text)=>dispatch(profileInputChangeAC(text))}
                />
            <div className={s.myPosts__posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;