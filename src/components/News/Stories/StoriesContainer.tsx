import {connect} from 'react-redux'
import {Stories} from './Stories';
import {AppStateType} from '../../../redux/store/redux-store';
import {setUsersAC, UserType} from "../../../redux/user-reducer";
import {useEffect} from "react";
import axios from "axios";

type StoriesAPIType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
}

const StoriesAPI: React.FC<StoriesAPIType> = ({setUsers, users}) => {
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((data) => setUsers(data.data.items))
    }, [setUsers])
    return <Stories users={users}/>

}

type MapStatePropsType = {
    users: UserType[]
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
}
// type MapDispatchPropsType = {
//     setUsers: (users: UserType[])=>void
// }
// let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
//     return {
//         setUsers: (users: UserType[])=>{
//             dispatch(setUsersAC(users))
//         }
//     }
// }

export const StoriesContainer = connect(
    mapStateToProps,
    {
        setUsers: setUsersAC
    }
)(StoriesAPI)