import axios from "axios";
import React, {useEffect} from "react";
import Profile from "./Profile";
import {useDispatch} from "react-redux";
import {ProfileUserType, setUserProfileAC} from "../../redux/profile-reducer";
//types


const ProfileContainer = () => {
    let dispatch = useDispatch()
    const setProfileUser = (user: ProfileUserType) =>{
        dispatch(setUserProfileAC(user))
    }
    useEffect(()=>{
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response =>{
                setProfileUser(response.data)
            })
    }, [setProfileUser])
    return <Profile/>
}
export default ProfileContainer;