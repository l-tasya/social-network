import {setUsersAC, toggleFollowAC, UserPageType, userReducer} from './user-reducer'

test('correct user follow should toggle', ()=>{
    const startState: UserPageType = {
        users: [
            {id: 1, imageSRC: '', status: 'I am a tasya\'s kent, and childhood best friend)', followed: false, fullName: 'Rakhat Sovet'},
            {id: 2, imageSRC: '', status: 'I am a tasya\'s kent)', followed: true, fullName: 'Ermekov Sanjar'},
            {id: 3, imageSRC: '', status: 'I am a tasya\'s kent)', followed: false, fullName: 'Bekzat Sultan'},
            {id: 4, imageSRC: '', status: 'I am a tasya\'s kent)', followed: false, fullName: 'Gabdullin Adilbek'},
            {id: 5, imageSRC: '', status: 'I am a tasya\'s kent)', followed: false, fullName: 'Kakimzhan Dias'},
        ]
    }
    let userID = 2
    const endState = userReducer(startState, toggleFollowAC(userID))
    expect(endState.users[1].followed).toBe(false)
})
test('correct users from server should sum to current users in state', () =>{
    const startState: UserPageType = {
        users: [
            {id: 1, imageSRC: '', status: 'I am a tasya\'s kent)', followed: false, fullName: 'Rakhat Sovet'},
            {id: 2, imageSRC: '', status: 'I am a tasya\'s kent)', followed: true, fullName: 'Ermekov Sanjar'},
            {id: 3, imageSRC: '', status: 'I am a tasya\'s kent)', followed: false, fullName: 'Bekzat Sultan'},
            {id: 4, imageSRC: '', status: 'I am a tasya\'s kent)', followed: false, fullName: 'Gabdullin Adilbek'},
            {id: 5, imageSRC: '', status: 'I am a tasya\'s kent)', followed: false, fullName: 'Kakimzhan Dias'},
        ]
    }
    let serverUsers: UserPageType = {
        users: [
            {id: 6, imageSRC: '', status: 'I am a tasya\'s kent)', followed: true, fullName: 'Muhammed Ali'},
            {id: 7, imageSRC: '', status: 'I am a tasya\'s kent)', followed: true, fullName: 'Baimusin Danial'},
        ]
    }
    const endState = userReducer(startState, setUsersAC(serverUsers.users))
    expect(endState.users.length).toBe(7)
})