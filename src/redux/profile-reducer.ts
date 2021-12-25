import {ActionsType, firstSrc, PostType, ProfilePageType, secondSrc} from './state';

export const profileReducer = (state: ProfilePageType, action:ActionsType) =>{
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