import axios from "axios";
import React, {useCallback, useEffect} from "react";
import Profile from "./Profile";
import {useDispatch} from "react-redux";
import {ProfileUserType, setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
//types

type ProfileContainerType = {
    match: any
}
const ProfileContainer: React.FC<ProfileContainerType> = (props) => {
    let dispatch = useDispatch()
    const setProfileUser = useCallback((user: ProfileUserType) => {
        dispatch(setUserProfileAC(user))
    },[])
    useEffect(() => {
        let userID = props.match.params.userID
        if (!userID) {
            userID = 2
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                setProfileUser(response.data)
            })
    }, [])
    return <Profile/>
}
export default withRouter(ProfileContainer);