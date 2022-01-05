import {addPostAC, profileInputChangeAC, ProfilePageType, profileReducer, secondSrc} from './profile-reducer';

test('profileReducer should change newPostText', ()=>{
    const startState: ProfilePageType = {
        userInfo: {
            imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            name: 'Temirtas',
            surname: 'Nursain',
            eMail: 'dalionfull@gmail.com'
        },
        post: [
            {id: 1, src: secondSrc, message: 'That is my wall?'},

        ],
        newPostText: '',
    }
    let newText = 'JoJoJo'
    const endState = profileReducer(startState, profileInputChangeAC(newText))
    expect(endState.newPostText).toBe(newText)
})
test('profileReducer should add post', ()=>{
    const startState: ProfilePageType = {
        userInfo: {
            imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            name: 'Temirtas',
            surname: 'Nursain',
            eMail: 'dalionfull@gmail.com'
        },
        post: [
            {id: 1, src: secondSrc, message: 'That is my wall?'},

        ],
        newPostText: '',
    }
    let newPostText = 'JOJOjO'
    //post input value change
    let newStartState:ProfilePageType = profileReducer(startState, profileInputChangeAC(newPostText))
    //add post button click
    const endState = profileReducer(newStartState, addPostAC(1))
    expect(endState.post.length).toBe(2)
    expect(endState.post[1].message).toBe(newPostText)

})