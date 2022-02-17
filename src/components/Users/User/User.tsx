import React from 'react';
import s from './User.module.scss'
import img from '../../../img/JOJO.png'
import {NavLink} from "react-router-dom";

type UserPropsType = {
    userIMG: string | null
    userName: string
    userStatus: string
    followed: boolean
    toggleFollow: (userID: number) => void
    userID: number
}

export const User: React.FC<UserPropsType> = (props) => {
    let something = props.followed ? 'REMOVE FRIEND' : 'ADD FRIEND'
    let stylesForFollowButton = {
        color: 'white',
        minWidth: '120px',
        background: props.followed ? '#adb5bd' : '#1e74fd',
        padding: '14px',
        maxHeight: '50px',
        borderRadius: '0.3rem',
        fontWeight: '700',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '10px'
    }
    let stylesForBackground = {
        background: '#1e74fd',
        color: '#1e74fd',
    }
    return <div className={s.users}>
        <div className={s.users__background}>
            <div className={s.users__backgroundChildren} style={stylesForBackground}>s</div>
        </div>

        <div className={s.users__first}>
           <NavLink className={s.users__link} to={`/social-network/profile/${props.userID}`}>
               <img src={props.userIMG? props.userIMG: img} className={s.users__img} alt=""/>
           </NavLink>
            <button
                onClick={() => props.toggleFollow(props.userID)}
                style={stylesForFollowButton}
            >
                {
                    something
                }
            </button>
        </div>
        <div className={s.users__second}>
            <div className={s.users__name}>{props.userName}</div><span className={s.users__location}>Age: 17 y.o.</span>
            <div className={s.users__location}>Location: USA, Los Angeles</div>

        </div>

    </div>
}