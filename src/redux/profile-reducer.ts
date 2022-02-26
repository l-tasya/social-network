import {ActionsType} from './store/redux-store';

export let firstSrc = 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
export let secondSrc = 'https://static.turbosquid.com/Preview/001325/881/YD/_600.jpg';

export type UserInfoType = {
    imageSRC: string
    name: string
    surname: string
    eMail: string
}

export type PostType = {
    id: number
    src: string
    message: string
}
export type PostsType = Array<PostType>

export type ProfileUserType = {
    userId: number
    lookingForAJob?: boolean
    fullName: string
    contacts: {
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    post: PostsType
    profile: ProfileUserType
}

let initialState: ProfilePageType = {
    post: [
        {id: 1, src: secondSrc, message: 'That is my wall?'},

    ],
    profile: {
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
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":{
            let newPost: PostType = {
                id: state.post[state.post.length - 1].id + 1,
                src: state.profile.photos.small,
                message: action.message,
            }
            return {
                ...state,
                post: [...state.post, newPost],
            }
        }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.user
            }
        default:{
            return{
                ...state
            }
        }
    }
}
/*----AC----*/
export const addPostAC = (message: string) => {
    return {
        type: 'ADD-POST',
        message
    } as const
}
export const setUserProfileAC = (user: ProfileUserType) => {
    return {
        type: 'SET-USER-PROFILE',
        user,
    } as const
}