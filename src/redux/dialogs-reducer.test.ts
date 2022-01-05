import {dialogInputChangeAC, DialogsPageType, dialogsReducer, sendMessageAC} from './dialogs-reducer';

test('dialog reducer should change newMessageText', ()=>{
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
    let newMessageText = 'JoJOJO'
    const endState = dialogsReducer(startState, dialogInputChangeAC(newMessageText))
    expect(endState.newMessageText).toBe(newMessageText)
})
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
    let newMessageText = 'JoJOJO'
    let newStartState = dialogsReducer(startState, dialogInputChangeAC(newMessageText))
    let endState = dialogsReducer(newStartState, sendMessageAC())
    expect(endState.messages[endState.messages.length-1].message).toBe(newMessageText)
    expect(endState.messages.length).toBe(7)
})