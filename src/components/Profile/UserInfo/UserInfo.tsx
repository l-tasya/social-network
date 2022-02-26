import React from 'react';
import {Mail, MoreHorizontal} from 'react-feather';
import s from './UserInfo.module.scss'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/redux-store";
import {ProfileUserType} from "../../../redux/profile-reducer";


type UserInfoPropsType = {}

const UserInfo: React.FC<UserInfoPropsType> = React.memo(() => {
    let user = useSelector<AppStateType, ProfileUserType | null>(state => state.profilePage.profile)
    let backgroundImageStyle = {
        background: 'red'
    }
    return (
        <div className={s.userInfo}>
            <div className={s.userInfo__img} style={backgroundImageStyle}>
                <div>
                    background image
                </div>
            </div>
            <div className={s.userInfo__info}>
                <span className={s.userInfo__about}>
                    <img className={s.userInfo__ava} src={user?.photos.large} alt=''/>
                    <div>
                        <div className={s.userInfo__title}>{user?.fullName}</div>
                        <div className={s.userInfo__subtitle}>{user?.contacts.mainLink}</div>
                    </div>
                </span>
                <div className={`${s.userInfo__buttons} ${s.buttons}`}>
                    <button className={s.buttons__friendAdd}>ADD FRIEND</button>
                    <button className={s.buttons__chat}><Mail size={20}/></button>
                    <button className={s.buttons__other}><MoreHorizontal size={20}/></button>
                </div>
            </div>
        </div>
    )
})
export default UserInfo;