import React from 'react'
import s from './Stories.module.scss'
import {Story} from './Story/Story';
import {UserType} from "../../../redux/user-reducer";
import {AppStateType} from "../../../redux/store/redux-store";
import {useSelector} from "react-redux";

export const Stories: React.FC = React.memo(() => {
    let users = useSelector<AppStateType, UserType[]>(state => state.usersPage.users)
    return <div className={s.body}>
        <div className={s.stories}>
            {users.map(u => <Story key={u.id} user={u}/>)}
        </div>
    </div>
})