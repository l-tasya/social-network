let firstSrc = 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
let secondSrc = 'https://static.turbosquid.com/Preview/001325/881/YD/_600.jpg';
/*------STATE TYPE------*/

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

export type DialogType = {
    id: string
    name: string
}
export type DialogsType = Array<DialogType>

export type MessageType = {
    id: number
    message: string
    sent: boolean
}
export type MessagesType = Array<MessageType>

export type FeedStoryType = {
    user: {
        name: string
        surname: string
        imageSRC: string
    },
    story: any
}
export type FeedStoriesType = Array<FeedStoryType>
export type FeedPostType = {
    id: number
    src: string
    message: string
}
export type FeedPostsType = Array<FeedPostType>

export type ProfilePageType = {
    userInfo: UserInfoType
    post: PostsType
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
}
export type NewsPageType = {
    userInfo: UserInfoType
    feedStories: FeedStoriesType
    feedNewPostText: string
    feedPosts: FeedPostsType
}
/*-------main------*/
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    newsPage: NewsPageType
}
/*------STATE TYPE------*/

/*------------STORE TYPE------------*/
export type StoreType = {
    _state: RootStateType
    _callbackSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}
/*------------STORE TYPE------------*/
/*--actions type--*/
export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof dialogInputChangeAC>
    | ReturnType<typeof profileInputChangeAC>
    | ReturnType<typeof fakeDialogsAC>
    | ReturnType<typeof addFeedPostAC>
    | ReturnType<typeof feedInputChangeAC>

/*--actions type--*/

/*---------------------------STORE---------------------------*/

export const store: StoreType = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            dialogs: [
                {id: '@Tasya', name: 'Tasya'},
                {id: '@Alex', name: 'Alex'},
                {id: '@Fox', name: 'Fox'},
                {id: '@Drill', name: 'Drill'},
                {id: '@Genius', name: 'Genius'},
                {id: '@Uncle', name: 'Uncle'},
                {id: '@GQtpe', name: 'GQtpe'},
                {id: '@Alina', name: 'Alina'},
            ],
            messages: [
                {id: 1, sent: true, message: 'Hi!'},
                {id: 2, sent: false, message: 'Hi!'},
                {id: 3, sent: true, message: 'How do you feel'},
                {id: 4, sent: false, message: 'I feel Incredibly good'},
                {id: 5, sent: true, message: 'Ok, bye'},
                {id: 6, sent: false, message: 'Bye'},
            ],
            newMessageText: ''
        },
        newsPage: {
            userInfo: {
                imageSRC: 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
                name: 'Temirtas',
                surname: 'Nursain',
                eMail: 'dalionfull@gmail.com'
            },
            feedStories: [],
            feedNewPostText: '',
            feedPosts: [
                {id: 1, src: secondSrc, message: 'LALALA' }
            ],
        }
    },
    getState() {
        return this._state
    },
    _callbackSubscriber(state: RootStateType) {
        console.log(`App rendering... ${state}`)
    },
    subscribe(observer: () => void) {
        this._callbackSubscriber = observer
    },
    dispatch(action) { //{type: string, args..}
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: this._state.profilePage.post[this._state.profilePage.post.length - 1].id + 1,
                src: action.src === 1 ? firstSrc : secondSrc,
                message: this._state.profilePage.newPostText,
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callbackSubscriber(this._state)
        }
        if (action.type === 'SEND-MESSAGE') {
            let newMessage: MessageType = {
                id: this._state.dialogsPage.messages.length !== 0 ? this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1 : 1,
                sent: true,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callbackSubscriber(this._state);
        }
        if (action.type === 'DIALOG-INPUT-CHANGE') {
            this._state.dialogsPage.newMessageText = `${action.text}`
            this._callbackSubscriber(this._state)
        }
        if (action.type === 'PROFILE-INPUT-CHANGE') {
            this._state.profilePage.newPostText = `${action.text}`
            this._callbackSubscriber(this._state);
        }
        if (action.type === 'FAKE-DIALOGS') {
            let temp = this._state
            temp.dialogsPage.messages = []
            this._callbackSubscriber({...temp})
        }
        if (action.type === 'ADD-FEED-POST') {
            let newFeedPost: FeedPostType = {
                id: this._state.newsPage.feedPosts[this._state.newsPage.feedPosts.length - 1].id + 1,
                message: this._state.newsPage.feedNewPostText,
                src: action.src === 1 ? firstSrc : secondSrc,
            }
            this._state.newsPage.feedPosts.push(newFeedPost)
            this._state.newsPage.feedNewPostText = ''
            this._callbackSubscriber(this._state)
        }
        if (action.type === 'FEED-INPUT-CHANGE'){
            this._state.newsPage.feedNewPostText = `${action.text}`
            this._callbackSubscriber(this._state);
        }
    }
}

/*---------------------------STORE---------------------------*/
/*----AC----*/
export const addPostAC = (src: 1 | 2) => {
    return {
        type: 'ADD-POST',
        src: src
    } as const
}
export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
export const fakeDialogsAC = () => {
    return {
        type: 'FAKE-DIALOGS',
    } as const
}
export const profileInputChangeAC = (text: string) => {
    return {
        type: 'PROFILE-INPUT-CHANGE',
        text: text,
    } as const
}
export const dialogInputChangeAC = (text: string) => {
    return {
        type: 'DIALOG-INPUT-CHANGE',
        text: text
    } as const
}
export const addFeedPostAC = (src: 1 | 2) => {
    return {
        type: 'ADD-FEED-POST',
        src: src
    } as const

}
export const feedInputChangeAC = (text: string) =>{
    return {
        type: 'FEED-INPUT-CHANGE',
        text: text
    } as const
}

/*----AC----*/