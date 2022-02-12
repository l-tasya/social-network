import React from 'react'
import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/store/redux-store';
import {Dispatch} from 'redux';
import {changeCurrentPageAC, changeTotalUserAC, setUsersAC, toggleFollowAC, UserType} from '../../redux/user-reducer';
import {useEffect} from "react";
import axios from "axios";


type UsersAPIPropsType = {
    users: UserType[]
    toggleFollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (newValue: number) => void
    changeTotalUsers: (newValue: number) => void
    totalUsers: number
    pageSize: number
    currentPage: number
}
const UsersAPI: React.FC<UsersAPIPropsType> = ({
                                                   users,
                                                   toggleFollow,
                                                   pageSize,
                                                   totalUsers,
                                                   changeCurrentPage,
                                                   currentPage,
                                                   changeTotalUsers,
                                                   setUsers,
                                               }) => {
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then((response) => {
                setUsers(response.data.items)
                changeTotalUsers(30)
            })
    }, [currentPage, pageSize, setUsers, changeTotalUsers])
    return  <div>
        <Users users={users} currentPage={currentPage} changeCurrentPage={changeCurrentPage} pageSize={pageSize} toggleFollow={toggleFollow} totalUsers={totalUsers}/>
    </div>
}


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsers: number
    currentPage: number
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage
    }
}
type MapDispatchPropsType = {
    toggleFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    changeCurrentPage: (newValue: number) => void
    changeTotalUsers: (newValue: number) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    const toggleFollow = (userID: number) => {
        dispatch(toggleFollowAC(userID))
    }
    const setUsers = (user: UserType[]) => {
        dispatch(setUsersAC(user))
    }
    const changeCurrentPage = (newValue: number) => {
        dispatch(changeCurrentPageAC(newValue))
    }
    const changeTotalUsers = (newValue: number) => {
        dispatch(changeTotalUserAC(newValue))
    }

    return {
        toggleFollow,
        setUsers,
        changeCurrentPage,
        changeTotalUsers
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)