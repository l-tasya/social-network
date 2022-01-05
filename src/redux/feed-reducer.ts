import {UserInfoType} from './profile-reducer';
import {ActionsType} from './redux-store';
import {firstSrc, secondSrc} from './state';

export type FeedStoryType = {
    user: {
        name: string
        surname: string
        imageSRC: string
    },
    story: any,
    id: number
}
export type FeedStoriesType = Array<FeedStoryType>

export type FeedPostType = {
    id: number
    src: string
    message: string
}
export type FeedPostsType = Array<FeedPostType>

export type NewsPageType = {
    userInfo: UserInfoType
    feedStories: FeedStoriesType
    feedNewPostText: string
    feedPosts: FeedPostsType
}

let initialState: NewsPageType = {
    userInfo: {
        imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        name: 'Temirtas',
        surname: 'Nursain',
        eMail: 'dalionfull@gmail.com'
    },

    feedStories: [
        {
            user: {
                imageSRC: 'avatar',
                name: 'Tasya',
                surname: 'Tasya'
            },
            id: 1,
            story: 'brown'
        },
        {
            user: {
                imageSRC: 'avatar',
                name: 'User',
                surname: 'Padj'
            },
            id: 2,
            story: 'cornflowerblue'
        },
    ],
    feedNewPostText: '',
    feedPosts: [
        {id: 1, src: secondSrc, message: 'LALALA'}
    ],
}

export const feedReducer = (state: NewsPageType = initialState, action: ActionsType): NewsPageType => {
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
    return {...state}
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