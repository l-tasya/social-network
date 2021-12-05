let firstSrc = 'https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false';
let secondSrc = 'https://static.turbosquid.com/Preview/001325/881/YD/_600.jpg';
//object types
export type PostType ={
    id: number
    src: string
    message: string
}
export type DialogType ={
    id: string
    name: string
}
export type MessageType ={
    id: number
    message: string
    sent: boolean
}
//items array types
export type PostsType = Array<PostType>
export type DialogsType = Array<DialogType>
export type MessagesType = Array<MessageType>
//other types
export type ProfilePageType = {
    post: PostsType
    newPostText: string
}
export type DialogsPageType ={
    dialogs: DialogsType
    messages: MessagesType
    messageCurrentValue: string
}
//state type
export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
//store type
export type StoreType = {
    _state: RootStateType
    _callbackSubscriber: (state: RootStateType)=>void
    getState: ()=>RootStateType
    addPost: (src: 1|2)=>void
    sendMessage: ()=>void
    onMessageChange: (text: string)=>void
    onPostInputChange: (text: string)=>void
    subscribe: (observer: ()=>void)=>void
}
/*---------------------------STORE---------------------------*/

export const store: StoreType  = {
    _state: {
        profilePage: {
            post: [
                {id: 1, src: firstSrc, message: 'hi how are you?'},
                {id: 2, src: secondSrc, message: 'hi i am good ;)'},
                {id: 3, src: firstSrc, message: 'What happened?'},
                {id: 4, src: secondSrc, message: ')'},
                {id: 5, src: secondSrc, message: 'I got up with my right foot'},
                {id: 6, src: firstSrc, message: 'It is cool'},
                {id: 7, src: firstSrc, message: 'I m coool too'},
                {id: 7, src: secondSrc, message: 'Bye unknown'},
                {id: 8, src: firstSrc, message: 'Bye anonimous'},
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
    _callbackSubscriber (state: RootStateType){

    },
    addPost(src: 1 | 2) {

        let newPost: PostType = {
            id: this._state.profilePage.post[this._state.profilePage.post.length - 1].id + 1,
            src: src === 1 ? firstSrc : secondSrc,
            message: this._state.profilePage.newPostText,
        }
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callbackSubscriber(this._state)
    },
    sendMessage() {
        let newMessage: MessageType = {
            id: this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1,
            sent: true,
            message: this._state.dialogsPage.messageCurrentValue
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.messageCurrentValue = ''
        this._callbackSubscriber(this._state);
    },
    onMessageChange(text: string) {
        this._state.dialogsPage.messageCurrentValue = `${text}`
        this._callbackSubscriber(this._state)
    },
    onPostInputChange(text: string) {
        this._state.profilePage.newPostText = `${text}`
        this._callbackSubscriber(this._state);

    },
    subscribe(observer: ()=>void){
        this._callbackSubscriber = observer
    },
}

/*---------------------------STORE---------------------------*/
