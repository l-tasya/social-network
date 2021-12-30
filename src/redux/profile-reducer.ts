import {ActionsType, PostType, ProfilePageType} from './state';
export let firstSrc = 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
export let secondSrc = 'https://static.turbosquid.com/Preview/001325/881/YD/_600.jpg';
let initialState = {
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

export const profileReducer = (state: ProfilePageType = initialState, action:ActionsType) =>{
    if (action.type === 'ADD-POST') {
        let newPost: PostType = {
            id: state.post[state.post.length - 1].id + 1,
            src: action.src === 1 ? firstSrc : secondSrc,
            message: state.newPostText,
        }
        state.post.push(newPost)
        state.newPostText = ''
    }
    if (action.type === 'PROFILE-INPUT-CHANGE') {
        state.newPostText = `${action.text}`
    }
    return state
}/*----AC----*/
export const addPostAC = (src: 1 | 2) => {
    return {
        type: 'ADD-POST',
        src: src
    } as const
}
export const profileInputChangeAC = (text: string) => {
    return {
        type: 'PROFILE-INPUT-CHANGE',
        text: text,
    } as const
}