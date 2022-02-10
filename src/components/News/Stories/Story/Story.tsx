import React from 'react'
import s from './Story.module.scss'
import {UserType} from "../../../../redux/user-reducer";
import img from '../../../../img/JOJO.png'


type StoryPropsType = {
    user: UserType
}

export const Story: React.FC<StoryPropsType> = ({user}) => {
    return <div className={s.story}>
        <img className={ s.story__img} src={user.photos.large? user.photos.large:img } alt=""/>
        <div className={s.story__name}>{user.name.split(' ')[0]}</div>
    </div>
}