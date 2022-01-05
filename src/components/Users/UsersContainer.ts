import {connect} from 'react-redux';
import { Users } from './Users';
import {AppStateType} from '../../redux/redux-store';
import { Dispatch } from 'redux';
import {toggleFollowAC, UserType} from '../../redux/user-reducer';

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
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType =>{
    const toggleFollow = (userID: number) =>{
        dispatch(toggleFollowAC(userID))
    }

    return {
        toggleFollow,
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)