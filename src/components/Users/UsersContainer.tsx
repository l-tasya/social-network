import React, {useEffect} from 'react'
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
                changeTotalUsers(50)
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