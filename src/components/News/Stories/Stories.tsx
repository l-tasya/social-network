import React, {useEffect} from 'react'
import s from './Stories.module.scss'
import {Story} from './Story/Story';
import {UserType} from "../../../redux/user-reducer";
import axios from 'axios';

type StoriesPropsType = {
    users: UserType[]
    setUsers: (users: UserType[])=>void
}

export const Stories: React.FC<StoriesPropsType> = ({setUsers, users})=>{
    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((data)=>setUsers(data.data.items))
    }, [setUsers])

    return <div className={s.body}>
    <div className={s.stories}>
        {users.map(u=><Story user={u}/>)}
    </div>
    </div>
}