import {
    changeCurrentPageAC,
    changeTotalUserAC,
    setUsersAC,
    toggleFollowAC,
    toggleIsFetchingAC,
    UserPageType,
    userReducer
} from './user-reducer'

test('correct user follow should toggle', ()=>{
    const startState: UserPageType = {
        users: [
            {id: 1, status: 'I am a tasya\'s kent, and childhood best friend)', followed: false, name: 'Rakhat Sovet', photos: {small: null, large: null}},
            {id: 2, status: 'I am a tasya\'s kent)', followed: true, name: 'Ermekov Sanjar', photos: {small: null, large: null}},
            {id: 3, status: 'I am a tasya\'s kent)', followed: false, name: 'Bekzat Sultan', photos: {small: null, large: null}},
            {id: 4, status: 'I am a tasya\'s kent)', followed: false, name: 'Gabdullin Adilbek', photos: {small: null, large: null}},
            {id: 5, status: 'I am a tasya\'s kent)', followed: false, name: 'Kakimzhan Dias', photos: {small: null, large: null}},
        ],
        pageSize: 4,
        totalUsers: 20,
        currentPage: 1,
        isFetching: false
    }
    let userID = 2
    const endState = userReducer(startState, toggleFollowAC(userID))
    expect(endState.users[1].followed).toBe(false)
})
test('correct users from server should sum to current users in state', () =>{
    const startState: UserPageType = {
        users: [
            {id: 1, status: 'I am a tasya\'s kent, and childhood best friend)', followed: false, name: 'Rakhat Sovet', photos: {small: null, large: null}},
            {id: 2, status: 'I am a tasya\'s kent)', followed: true, name: 'Ermekov Sanjar', photos: {small: null, large: null}},
            {id: 3, status: 'I am a tasya\'s kent)', followed: false, name: 'Bekzat Sultan', photos: {small: null, large: null}},
            {id: 4, status: 'I am a tasya\'s kent)', followed: false, name: 'Gabdullin Adilbek', photos: {small: null, large: null}},
            {id: 5, status: 'I am a tasya\'s kent)', followed: false, name: 'Kakimzhan Dias', photos: {small: null, large: null}},
        ],
        pageSize: 4,
        totalUsers: 20,
        currentPage: 1,
        isFetching: false
    }
    let serverUsers: UserPageType = {
        users: [
            {id: 6, status: 'I am a tasya\'s kent)', followed: false, name: 'Muha', photos: {small: null, large: null}},
            {id: 7, status: 'I am a tasya\'s kent)', followed: false, name: 'Asan', photos: {small: null, large: null}},
        ],
        pageSize: 4,
        totalUsers: 20,
        currentPage: 1,
        isFetching: false
    }
    const endState = userReducer(startState, setUsersAC(serverUsers.users))
    expect(endState.users.length).toBe(2)
})
test('user-reducer should change current page', ()=>{
    const startState: UserPageType = {
        users: [
            {id: 1, status: 'I am a tasya\'s kent, and childhood best friend)', followed: false, name: 'Rakhat Sovet', photos: {small: null, large: null}},
            {id: 2, status: 'I am a tasya\'s kent)', followed: true, name: 'Ermekov Sanjar', photos: {small: null, large: null}},
            {id: 3, status: 'I am a tasya\'s kent)', followed: false, name: 'Bekzat Sultan', photos: {small: null, large: null}},
            {id: 4, status: 'I am a tasya\'s kent)', followed: false, name: 'Gabdullin Adilbek', photos: {small: null, large: null}},
            {id: 5, status: 'I am a tasya\'s kent)', followed: false, name: 'Kakimzhan Dias', photos: {small: null, large: null}},
        ],
        pageSize: 4,
        totalUsers: 20,
        currentPage: 1,
        isFetching: false
    }
    let newValue: number = 3
    const endState = userReducer(startState, changeCurrentPageAC(newValue))
    expect(endState.currentPage).toBe(newValue)
})
test('user-reducer should change total user count', ()=>{
    const startState: UserPageType = {
        users: [
            {id: 1, status: 'I am a tasya\'s kent, and childhood best friend)', followed: false, name: 'Rakhat Sovet', photos: {small: null, large: null}},
            {id: 2, status: 'I am a tasya\'s kent)', followed: true, name: 'Ermekov Sanjar', photos: {small: null, large: null}},
            {id: 3, status: 'I am a tasya\'s kent)', followed: false, name: 'Bekzat Sultan', photos: {small: null, large: null}},
            {id: 4, status: 'I am a tasya\'s kent)', followed: false, name: 'Gabdullin Adilbek', photos: {small: null, large: null}},
            {id: 5, status: 'I am a tasya\'s kent)', followed: false, name: 'Kakimzhan Dias', photos: {small: null, large: null}},
        ],
        pageSize: 4,
        totalUsers: 0,
        currentPage: 1,
        isFetching: false
    }
    let newValue =22;
    const endState = userReducer(startState, changeTotalUserAC(newValue))
    expect(endState.totalUsers).toBe(newValue)
})
test('user reducer should toggle isFetching',()=>{
    const startState: UserPageType = {
        users: [
            {id: 1, status: 'I am a tasya\'s kent, and childhood best friend)', followed: false, name: 'Rakhat Sovet', photos: {small: null, large: null}},
            {id: 2, status: 'I am a tasya\'s kent)', followed: true, name: 'Ermekov Sanjar', photos: {small: null, large: null}},
            {id: 3, status: 'I am a tasya\'s kent)', followed: false, name: 'Bekzat Sultan', photos: {small: null, large: null}},
            {id: 4, status: 'I am a tasya\'s kent)', followed: false, name: 'Gabdullin Adilbek', photos: {small: null, large: null}},
            {id: 5, status: 'I am a tasya\'s kent)', followed: false, name: 'Kakimzhan Dias', photos: {small: null, large: null}},
        ],
        pageSize: 4,
        totalUsers: 0,
        currentPage: 1,
        isFetching: false
    }
    let newValue = true
    const endState = userReducer(startState, toggleIsFetchingAC(newValue))
    expect(endState.isFetching).toBe(newValue)
})