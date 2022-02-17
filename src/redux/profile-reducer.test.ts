import {addPostAC, profileInputChangeAC, ProfilePageType, profileReducer, secondSrc} from './profile-reducer';

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