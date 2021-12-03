let rerenderEntireTree = (state: RootStateType)=>{

}
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
//main type
export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export const state: RootStateType = {
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
            {id: '@Vasya', name: 'Vasya'},
            {id: '@Sasha', name: 'Sasha'},
            {id: '@Dyadya', name: 'Dyadya'},
            {id: '@Genius', name: 'Genius'},
            {id: '@Kent', name: 'Kent'},
            {id: '@King', name: 'King'},
        ],
        messages: [
            {id: 1,sent:true,  message: 'Hi!'},
            {id: 2,sent:false,  message: 'How are you!'},
            {id: 3,sent:true,  message: 'You are great person!'},
            {id: 4,sent:false,  message: 'Very glad to see you!'},
            {id: 5,sent:false,  message: 'Bye'},
        ],
        messageCurrentValue: ''
    }
}

export const addPost = (src: 1 | 2) => {

    let newPost: PostType = {
        id: state.profilePage.post[state.profilePage.post.length - 1].id + 1,
        src: src === 1 ? firstSrc : secondSrc,
        message: state.profilePage.newPostText,
    }
    state.profilePage.post.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const sendMessage = ()=>{
    let newMessage: MessageType = {
        id: state.dialogsPage.messages[state.dialogsPage.messages.length -1].id +1,
        sent: true,
        message: state.dialogsPage.messageCurrentValue
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.messageCurrentValue = ''
    rerenderEntireTree(state);
}
export const onMessageChange = (text: string)=>{
    state.dialogsPage.messageCurrentValue = `${text}`
    rerenderEntireTree(state)
}
export const onPostInputChange = (text: string) =>{
    state.profilePage.newPostText = `${text}`
    rerenderEntireTree(state);

}
export const subscribe = (observer: ()=>void) =>{
    rerenderEntireTree = observer
}
