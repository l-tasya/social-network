import axios from 'axios';
import React, { useEffect } from 'react';
import {UserType} from '../../redux/user-reducer';
import {User} from './User/User';
import s from './Users.module.scss'

type UsersPropsType = {
    users: UserType[]
    toggleFollow: (userID: number) => void
    setUsers: (users: UserType[])=>void
}

export const Users: React.FC<UsersPropsType> = ({users, toggleFollow, setUsers}) => {
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                setUsers(response.data.items)
            })
        }, [])

    return <div className={s.users}>
        {users.map(u => <User key={u.id}
                              toggleFollow={toggleFollow}
                              userID={u.id}
                              userIMG={u.photos.small}
                              userName={u.name}
                              userStatus={u.status}
                              followed={u.followed}
        />)}
    </div>
}