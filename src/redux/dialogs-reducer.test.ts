import {DialogsPageType, dialogsReducer, sendMessageAC} from './dialogs-reducer';

test('dialog reducer should send correct message', ()=>{
    const startState: DialogsPageType = {
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
            {id: 1,time: '', sent: true, message: 'Hi!'},
            {id: 2,time: '', sent: false, message: 'Hi!'},
            {id: 3,time: '', sent: true, message: 'How do you feel'},
            {id: 4,time: '', sent: false, message: 'I feel Incredibly good'},
            {id: 5,time: '', sent: true, message: 'Ok, bye'},
            {id: 6,time: '', sent: false, message: 'Bye'},
        ],
    }
    let newMessageText = 'JoJOJO'
    let endState = dialogsReducer(startState, sendMessageAC(newMessageText))
    expect(endState.messages[endState.messages.length-1].message).toBe(newMessageText)
    expect(endState.messages.length).toBe(7)
})