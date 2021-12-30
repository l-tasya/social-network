import {ActionsType, FeedPostType, firstSrc, NewsPageType, secondSrc} from './state';
let initialState = {
    userInfo: {
        imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        name: 'Temirtas',
        surname: 'Nursain',
        eMail: 'dalionfull@gmail.com'
    },
    feedStories: [],
    feedNewPostText: '',
    feedPosts: [
        {id: 1, src: secondSrc, message: 'LALALA'}
    ],
}

export const feedReducer = (state: NewsPageType =initialState, action: ActionsType) =>{
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