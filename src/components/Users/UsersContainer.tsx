import React from 'react'
import {connect} from 'react-redux';
import {Users} from './Users';
import {AppStateType} from '../../redux/store/redux-store';
import {
    changeCurrentPageAC,
    changeTotalUserAC,
    setUsersAC,
    toggleFollowAC,
    toggleIsFetchingAC,
    UserType
} from '../../redux/user-reducer';
import {useEffect} from "react";
import axios from "axios";
import {Preloader} from '../common/Preloader/Preloader';


type UsersAPIPropsType = {
    users: UserType[]
    toggleFollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    changeCurrentPage: (newValue: number) => void
    changeTotalUsers: (newValue: number) => void
    toggleIsFetching: (newValue: boolean) => void
    totalUsers: number
    pageSize: number
    currentPage: number
    isFetching: boolean
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
                                                   isFetching,
                                                   toggleIsFetching
                                               }) => {
    useEffect(() => {
        toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`)
            .then((response) => {
                setUsers(response.data.items)
                toggleIsFetching(false)
                changeTotalUsers(30)
            })
    }, [currentPage, pageSize, setUsers, changeTotalUsers, toggleIsFetching])
    return <div>
        {isFetching ? <Preloader/> : null}
        <Users users={users}
               currentPage={currentPage}
               changeCurrentPage={changeCurrentPage}
               pageSize={pageSize}
               toggleFollow={toggleFollow} totalUsers={totalUsers}/>
    </div>
}


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsers: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// type MapDispatchPropsType = {
//     toggleFollow: (userID: number) => void
//     setUsers: (users: Array<UserType>) => void
//     changeCurrentPage: (newValue: number) => void
//     changeTotalUsers: (newValue: number) => void
//     toggleIsFetching: (newValue: boolean) => void
// }
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     const toggleFollow = (userID: number) => {
//         dispatch(toggleFollowAC(userID))
//     }
//     const setUsers = (user: UserType[]) => {
//         dispatch(setUsersAC(user))
//     }
//     const changeCurrentPage = (newValue: number) => {
//         dispatch(changeCurrentPageAC(newValue))
//     }
//     const changeTotalUsers = (newValue: number) => {
//         dispatch(changeTotalUserAC(newValue))
//     }
//     const toggleIsFetching = (newValue: boolean) => {
//         dispatch(toggleIsFetchingAC(newValue))
//     }
//     return {
//         toggleFollow,
//         setUsers,
//         changeCurrentPage,
//         changeTotalUsers,
//         toggleIsFetching
//     }
// }

export const UsersContainer = connect(
    mapStateToProps,
    {
        toggleFollow: toggleFollowAC,
        setUsers: setUsersAC,
        changeCurrentPage: changeCurrentPageAC,
        changeTotalUsers: changeTotalUserAC,
        toggleIsFetching: toggleIsFetchingAC,
    }
)(UsersAPI)