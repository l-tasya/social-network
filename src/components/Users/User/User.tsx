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
    let something = props.followed?'UNFOLLOW':'FOLLOW'
    return <div className={s.users}>
        <div>
            <img src={props.userIMG} className={s.users__img} alt=""/>
            <button
                onClick={()=>props.toggleFollow(props.userID)}>
                {
                    something
                }
            </button>
        </div>
        <div>
            <div>{props.userName}</div>
            <div>{props.userStatus}</div>
        </div>
        <div>
            <div>{props.country}</div>
            <div>{props.city}</div>
        </div>
    </div>
}