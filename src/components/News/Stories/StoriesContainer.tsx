import {connect} from 'react-redux'
import {Stories} from './Stories';
import {AppStateType} from '../../../redux/store/redux-store';
import {Dispatch} from 'redux';
import {setUsersAC, UserType} from "../../../redux/user-reducer";


type MapStatePropsType = {
    users: UserType[]
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
type MapDispatchPropsType = {
    setUsers: (users: UserType[])=>void
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        setUsers: (users: UserType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}

export const StoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Stories)