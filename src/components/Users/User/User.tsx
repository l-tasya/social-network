import React from 'react';
import s from './User.module.scss'

type UserPropsType = {
    userIMG: string
    userName: string
    userStatus: string
    followed: boolean
    toggleFollow: (userID: number) => void
    userID: number
    country: string
    city: string
    background: string
    age: number
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
        background: props.background,
        color: props.background,
    }
    return <div className={s.users}>
        <div className={s.users__background}>
            <div className={s.users__backgroundChildren} style={stylesForBackground}>s</div>
        </div>

        <div className={s.users__first}>
            <img src={props.userIMG} className={s.users__img} alt=""/>
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
            <div className={s.users__name}>{props.userName}</div><span className={s.users__location}>Age: {props.age} y.o.</span>
            <div className={s.users__location}>Location: {props.country}, {props.city}</div>

        </div>

    </div>
}