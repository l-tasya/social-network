import axios from 'axios';
import React, {useEffect} from 'react';
import {UserType} from '../../redux/user-reducer';
import {User} from './User/User';
import s from './Users.module.scss'

type UsersPropsType = {
    users: UserType[]
    toggleFollow: (userID: number) => void
    setUsers: (users: UserType[])=>void
    changeCurrentPage: (newValue: number) =>void
    changeTotalUsers: (newValue: number) =>void
    totalUsers: number
    pageSize: number
    currentPage: number
}

export const Users: React.FC<UsersPropsType> = ({changeTotalUsers,users, toggleFollow, setUsers, pageSize,totalUsers,changeCurrentPage, currentPage}) => {
    useEffect(()=>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then((response)=>{
                setUsers(response.data.items)
                changeTotalUsers(30)
            })
    }, [currentPage, pageSize, setUsers, changeTotalUsers])

    let pagesCount = Math.ceil(totalUsers / pageSize)
    let pages = []
    for(let i = 1;i <= pagesCount; i++){
        pages.push(i)
    }

    return <div className={s.users}>
        <div className={s.users__pages}>
            {
                pages.map(p=>{
                    const onClickHandler = () =>{
                        changeCurrentPage(p)
                    }
                    return <span onClick={onClickHandler} className={currentPage === p?s.currentPage:''}>{p}</span>
                })
            }
        </div>

        <div className={s.users__users}>
            {users.map(u => <User key={u.id}
                                  toggleFollow={toggleFollow}
                                  userID={u.id}
                                  userIMG={u.photos.small}
                                  userName={u.name}
                                  userStatus={u.status}
                                  followed={u.followed}
            />)}
        </div>

    </div>
}