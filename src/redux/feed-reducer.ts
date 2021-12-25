import {ActionsType, FeedPostType, firstSrc, NewsPageType, secondSrc} from './state';

export const feedReducer = (state: NewsPageType, action: ActionsType) =>{
    if (action.type === 'ADD-FEED-POST') {
        let newFeedPost: FeedPostType = {
            id: state.feedPosts[state.feedPosts.length - 1].id + 1,
            message: state.feedNewPostText,
            src: action.src === 1 ? firstSrc : secondSrc,
        }
        state.feedPosts.push(newFeedPost)
        state.feedNewPostText = ''

    }
    if (action.type === 'FEED-INPUT-CHANGE') {
        state.feedNewPostText = `${action.text}`
    }
    return state
}
export const addFeedPostAC = (src: 1 | 2) => {
    return {
        type: 'ADD-FEED-POST',
        src: src
    } as const

}
export const feedInputChangeAC = (text: string) => {
    return {
        type: 'FEED-INPUT-CHANGE',
        text: text
    } as const
}