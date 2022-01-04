import React from "react";
import s from './Profile.module.scss';
import Statistics from "./Statistics/Statistics";
import UserInfo from "./UserInfo/UserInfo";
import {ReduxStoreType} from '../../redux/redux-store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
//types
type ProfilePropsType = {
    store: ReduxStoreType
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <UserInfo state={props.store.getState().profilePage.userInfo} />
            <Statistics />
            <MyPostsContainer/>
        </div>
    );
}
export default Profile;