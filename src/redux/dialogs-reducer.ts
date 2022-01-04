import {ActionsType} from './redux-store';


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

export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
    error: null | string
}

let initialState: DialogsPageType = {
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
    newMessageText: '',
    error: null,
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType):DialogsPageType  =>{
    if (action.type === 'SEND-MESSAGE') {
        if(state.newMessageText.trim() !== ''){
        let newMessage: MessageType = {
            id: state.messages.length !== 0 ? state.messages[state.messages.length - 1].id + 1 : 1,
            sent: true,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
        }
        if(state.newMessageText.trim() === ''){
            state.error = 'required field'
        }
    }
    if (action.type === 'DIALOG-INPUT-CHANGE') {
        state.error = null
        state.newMessageText = `${action.text}`
    }
    if (action.type === 'FAKE-DIALOGS') {
        state.messages = []
    }
    return {...state}
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
export const dialogInputChangeAC = (text: string) => {
    return {
        type: 'DIALOG-INPUT-CHANGE',
        text: text
    } as const
}