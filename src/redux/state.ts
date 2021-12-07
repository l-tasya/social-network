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
export type ProfilePageType = {
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
/*----DISPATCH ACTIONS----*/
type AddPostActionType = {
    type: 'ADD-POST'
    src: 1 | 2
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
type MessageChangeActionType = {
    type: 'MESSAGE-CHANGE'
    text: string
}
type PostInputChangeActionType = {
    type: 'POST-INPUT-CHANGE'
    text: string
}
type LikeClickActionType = {
    type: 'LIKE-CLICK'
    id: number
}
/*--general type--*/
export type ActionsType =
    AddPostActionType
    | SendMessageActionType
    | MessageChangeActionType
    | PostInputChangeActionType
    | LikeClickActionType
/*--general type--*/
/*----DISPATCH ACTIONS----*/

/*---------------------------STORE---------------------------*/

export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, src: firstSrc, message: 'hi how are you?', like: false},
                {id: 2, src: secondSrc, message: 'hi i am good ;)', like: false},
                {id: 3, src: firstSrc, message: 'What happened?', like: false},
                {id: 4, src: secondSrc, message: ')', like: false},
                {id: 5, src: secondSrc, message: 'I got up with my right foot', like: false},
                {id: 6, src: firstSrc, message: 'It is cool', like: false},
                {id: 7, src: firstSrc, message: 'I m coool too', like: false},
                {id: 8, src: secondSrc, message: 'Bye unknown', like: false},
                {id: 9, src: firstSrc, message: 'Bye anonimous', like: false},
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
                id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
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
            this._callbackSubscriber({ ...newState})
        }
    }
}

/*---------------------------STORE---------------------------*/
