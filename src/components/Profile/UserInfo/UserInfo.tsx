import React from 'react';
import {Mail, MoreHorizontal} from 'react-feather';
import s from './UserInfo.module.scss'

const UserInfo: React.FC = (props) => {
    //todo: state of user(photo, name, img...)
    return (
        <div className={s.userInfo}>
            <div className={s.userInfo__img}>
                <div>
                    background image
                </div>
            </div>
            <div className={s.userInfo__info}>
                <img className={s.userInfo__ava} src={'http://uitheme.net/sociala/images/user-12.png'} alt=''/>
                <div>
                    <div className={s.userInfo__title}>Name Surname</div>
                    <div className={s.userInfo__subtitle}>dalionfull@gmail.com</div>
                </div>
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