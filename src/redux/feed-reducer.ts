import {UserInfoType} from './profile-reducer';
import {ActionsType} from './store/redux-store';
import {firstSrc, secondSrc} from './store/state';


export type FeedPostType = {
    id: number
    src: string
    message: string
}
export type FeedPostsType = Array<FeedPostType>

export type NewsPageType = {
    userInfo: UserInfoType
    feedPosts: FeedPostsType
}

let initialState: NewsPageType = {
    userInfo: {
        imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
        name: 'Temirtas',
        surname: 'Nursain',
        eMail: 'dalionfull@gmail.com'
    },
    feedPosts: [
        {id: 1, src: secondSrc, message: 'LALALA'}
    ],
}

export const feedReducer = (state: NewsPageType = initialState, action: ActionsType): NewsPageType => {
    if (action.type === 'ADD-FEED-POST') {
        let newFeedPost: FeedPostType = {
            id: state.feedPosts[state.feedPosts.length - 1].id + 1,
            message: action.message,
            src: firstSrc,
        }
        state.feedPosts.push(newFeedPost)

    }
    return {...state}
}
export const addFeedPostAC = (message: string) => {
    return {
        type: 'ADD-FEED-POST',
        message,
    } as const
    
}