import React from "react";
import {ActionsType, ProfilePageType} from '../../redux/state';
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.scss';
import Statistics from "./Statistics/Statistics";
import UserInfo from "./UserInfo/UserInfo";
//types
type ProfilePropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsType)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <UserInfo state={props.state.userInfo} />
            <Statistics />
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
}
export default Profile;