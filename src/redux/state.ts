let firstSrc = 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
let secondSrc = 'https://static.turbosquid.com/Preview/001325/881/YD/_600.jpg';
/*------STATE TYPE------*/
export type PostType = {
    id: number
    src: string
    message: string
    like: boolean
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: number
    message: string
    sent: boolean
}
export type PostsType = Array<PostType>
export type DialogsType = Array<DialogType>
export type MessagesType = Array<MessageType>
export type UserInfoType = {
    imageSRC: string
    name: string
    surname: string
    eMail: string
}
export type ProfilePageType = {
    userInfo: UserInfoType
    post: PostsType
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    messageCurrentValue: string
}
/*-------main------*/
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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
    | ReturnType<typeof messageChangeAC>
    | ReturnType<typeof postInputChangeAC>
    | ReturnType<typeof likeClickAC>
    | ReturnType<typeof fakeDialogsAC>

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
                {id: 1, src: secondSrc, message: 'That is my wall?', like: false},

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
            messageCurrentValue: ''
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
                like: false
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callbackSubscriber(this._state)
        }
        if (action.type === 'SEND-MESSAGE') {
            let newMessage: MessageType = {
                id: this._state.dialogsPage.messages.length !== 0 ? this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1 : 1,
                sent: true,
                message: this._state.dialogsPage.messageCurrentValue
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.messageCurrentValue = ''
            this._callbackSubscriber(this._state);
        }
        if (action.type === 'MESSAGE-CHANGE') {
            this._state.dialogsPage.messageCurrentValue = `${action.text}`
            this._callbackSubscriber(this._state)
        }
        if (action.type === 'POST-INPUT-CHANGE') {
            this._state.profilePage.newPostText = `${action.text}`
            this._callbackSubscriber(this._state);
        }
        if (action.type === 'LIKE-CLICK') {
            let newState = this._state
            newState.profilePage.post[action.id].like = !newState.profilePage.post[action.id].like;
            this._callbackSubscriber({...newState})
        }
        if (action.type === 'FAKE-DIALOGS') {
            let temp = this._state
            temp.dialogsPage.messages = []
            this._callbackSubscriber({...temp})
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
export const likeClickAC = (id: number) => {
    return {
        type: 'LIKE-CLICK',
        id: id
    } as const
}
export const fakeDialogsAC = () => {
    return {
        type: 'FAKE-DIALOGS',
    } as const
}
export const postInputChangeAC = (text: string) => {
    return {
        type: 'POST-INPUT-CHANGE',
        text: text,
    } as const
}
export const messageChangeAC = (text: string) => {
    return {
        type: 'MESSAGE-CHANGE',
        text: text
    } as const
}
/*----AC----*/