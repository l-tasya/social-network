import React from 'react';
import {UserType} from '../../redux/user-reducer';
import {User} from './User/User';
import s from './Users.module.scss'

type UsersPropsType = {
    users: UserType[]
    toggleFollow: (userID: number) => void
}

export const Users: React.FC<UsersPropsType> = ({users, toggleFollow}) => {
    return <div className={s.users}>
        {users.map(u => <User key={u.id}
                              toggleFollow={toggleFollow}
                              userID={u.id}
                              userIMG={u.imageSRC}
                              userName={u.fullName}
                              userStatus={u.status}
                              followed={u.followed}
                              country={u.country}
                              city={u.city}
                              background={u.background}
                              age={u.age}
        />)}
    </div>
}