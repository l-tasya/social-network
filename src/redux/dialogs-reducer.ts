import {ActionsType, DialogsPageType, MessageType} from './state';

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) =>{
    if (action.type === 'SEND-MESSAGE') {
        let newMessage: MessageType = {
            id: state.messages.length !== 0 ? state.messages[state.messages.length - 1].id + 1 : 1,
            sent: true,
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''
    }
    if (action.type === 'DIALOG-INPUT-CHANGE') {
        state.newMessageText = `${action.text}`
    }
    if (action.type === 'FAKE-DIALOGS') {
        state.messages = []
    }
    return state
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