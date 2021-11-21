import React from "react";
import { ProfilePageType } from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.scss';
import Statistics from "./Statistics/Statistics";
import UserInfo from "./UserInfo/UserInfo";
//types
type ProfilePropsType = {
    state: ProfilePageType
    addPost: (src:1|2)=>void
    changeInput: (text: string)=>void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <UserInfo/>
            <Statistics />
            <MyPosts
                changeInput={props.changeInput}
                newPostText={props.state.newPostText}
                addPost={props.addPost}
                state={props.state.post}
            />
        </div>
    );
}
export default Profile;