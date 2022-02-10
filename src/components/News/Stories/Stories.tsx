import React, {useEffect} from 'react'
import s from './Stories.module.scss'
import {Story} from './Story/Story';
import {UserType} from "../../../redux/user-reducer";
import axios from 'axios';

type StoriesPropsType = {
    users: UserType[]
    setUsers: (users: UserType[])=>void
}

export const Stories: React.FC<StoriesPropsType> = (props)=>{
    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((data)=>props.setUsers(data.data.items))
    }, [])

    return <div className={s.body}>
    <div className={s.stories}>
        {props.users.map(u=><Story user={u}/>)}
    </div>
    </div>
}