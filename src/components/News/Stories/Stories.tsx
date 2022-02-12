import React from 'react'
import s from './Stories.module.scss'
import {Story} from './Story/Story';
import {UserType} from "../../../redux/user-reducer";

type StoriesPropsType = {
    users: UserType[]
}

export const Stories: React.FC<StoriesPropsType> = (
    {users}
) => {

    return <div className={s.body}>
        <div className={s.stories}>
            {users.map(u => <Story user={u}/>)}
        </div>
    </div>
}