import {connect} from 'react-redux';
import { Users } from './Users';
import {AppStateType} from '../../redux/store/redux-store';
import { Dispatch } from 'redux';
import {setUsersAC, toggleFollowAC, UserType} from '../../redux/user-reducer';

type MapStatePropsType = {
    users: UserType[]
}

const mapStateToProps = (state: AppStateType):MapStatePropsType =>{
    return {
        users: state.usersPage.users
    }
}
type MapDispatchPropsType = {
    toggleFollow: (userID: number)=>void
    setUsers: (users: Array<UserType>)=>void
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType =>{
    const toggleFollow = (userID: number) =>{
        dispatch(toggleFollowAC(userID))
    }
    const setUsers = (user: UserType[]) =>{
        dispatch(setUsersAC(user))
    }

    return {
        toggleFollow,
        setUsers,
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)