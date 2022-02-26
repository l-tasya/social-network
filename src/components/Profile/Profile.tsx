import React from "react";
import s from './Profile.module.scss';
import Statistics from "./Statistics/Statistics";
import UserInfo from "./UserInfo/UserInfo";
import MyPosts from "./MyPosts/MyPosts";
//types
type ProfilePropsType = {}

const Profile: React.FC<ProfilePropsType> = React.memo(() => {
    return (
        <div className={s.content}>
            <UserInfo/>
            <Statistics/>
            <MyPosts/>
        </div>
    );
})
export default Profile;