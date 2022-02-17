import {
    addPostAC,
    profileInputChangeAC,
    ProfilePageType,
    profileReducer,
    ProfileUserType,
    secondSrc, setUserProfileAC
} from './profile-reducer';

test('profileReducer should change newPostText', ()=>{
    const startState: ProfilePageType = {
        post: [
            {id: 1, src: secondSrc, message: 'That is my wall?'},

        ],
        newPostText: '',
        profile: null
    }
    let newText = 'JoJoJo'
    const endState = profileReducer(startState, profileInputChangeAC(newText))
    expect(endState.newPostText).toBe(newText)
})
test('profileReducer should add post', ()=>{
    const startState: ProfilePageType = {
        post: [
            {id: 1, src: secondSrc, message: 'That is my wall?'},

        ],
        newPostText: '',
        profile: null
    }
    let newPostText = 'JOJOjO'
    //post input value change
    let newStartState:ProfilePageType = profileReducer(startState, profileInputChangeAC(newPostText))
    //add post button click
    const endState = profileReducer(newStartState, addPostAC(1))
    expect(endState.post.length).toBe(2)
    expect(endState.post[1].message).toBe(newPostText)

})
test('profile reducer should set profileUser', ()=>{
    const startState: ProfilePageType = {
        post: [
            {id: 1, src: secondSrc, message: 'That is my wall?'},

        ],
        newPostText: '',
        profile: null
    }
    let user: ProfileUserType = {
        fullName: 'Temirtas Nursain',
        contacts: {
            mainLink: 'dalionfull@gmail.com'
        },
        userId: 0,
        photos: {
            small: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            large: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
        }
    }
    let endState = profileReducer(startState, setUserProfileAC(user))
    expect(endState.profile).toEqual(user)
})