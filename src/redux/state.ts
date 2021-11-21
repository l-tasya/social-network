let rerenderEntireTree = (state: RootStateType)=>{

}
let firstSrc = "http://uitheme.net/sociala/images/user-8.png";
let secondSrc = "http://uitheme.net/sociala/images/user-7.png";
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
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you!'},
            {id: 3, message: 'You are great person!'},
            {id: 4, message: 'Very glad to see you!'},
            {id: 5, message: 'Bye'},
            {id: 6, message: 'Moon beautiful today'},
        ],
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
export const onPostInputChange = (text: string) =>{
    state.profilePage.newPostText = `${text}`
    rerenderEntireTree(state);

}
export const subscribe = (observer: ()=>void) =>{
    rerenderEntireTree = observer
}