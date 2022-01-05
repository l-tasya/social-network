import React from 'react';
import {Mail, MoreHorizontal} from 'react-feather';
import { UserInfoType } from '../../../redux/profile-reducer';
import s from './UserInfo.module.scss'


type UserInfoPropsType = {
    state: UserInfoType
}


const UserInfo: React.FC<UserInfoPropsType> = (props) => {
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
                    <img className={s.userInfo__ava} src={props.state.imageSRC} alt=''/>
                    <div>
                        <div className={s.userInfo__title}>{props.state.name} {props.state.surname}</div>
                        <div className={s.userInfo__subtitle}>{props.state.eMail}</div>
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
}
export default UserInfo;