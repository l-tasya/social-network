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
}

export const User: React.FC<UserPropsType> = (props) => {
    let something = props.followed ? 'REMOVE FRIEND' : 'ADD FRIEND'
    let stylesForFollowButton = {
        color: 'white',
        minWidth: '120px',
        background: props.followed? 'firebrick':'#10d876',
        padding: '14px',
        maxHeight: '50px',
        borderRadius: '0.3rem',
        fontWeight: '700',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '10px'
    }
    return <div className={s.users}>
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
        <div>
            <div className={s.users__name}>{props.userName}</div>
                <div className={s.users__location}>Location: {props.country}, {props.city}</div>
            <div className={s.users__status}>Status: {props.userStatus}</div>
        </div>

    </div>
}