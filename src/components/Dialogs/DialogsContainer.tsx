import React, {ChangeEvent, useState} from 'react';
import {dialogInputChangeAC, fakeDialogsAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {ReduxStoreType} from '../../redux/redux-store';
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
    store: ReduxStoreType
}


const DialogsContainer: React.FC<DialogsContainerPropsType> = ({store}) => {

    let dialogItems = store.getState().dialogsPage.dialogs
    let dialogMessages = store.getState().dialogsPage.messages

    const onDialogItemClick = () =>{
        store.dispatch(fakeDialogsAC())
    }
    let newMessageText = store.getState().dialogsPage.newMessageText
    //local state
    let [error, setError] = useState<string|null>(null);
    //converting state to component

    //event handlers
    const onMessageInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        store.dispatch(dialogInputChangeAC(`${e.currentTarget.value}`))
    }
    const enterKeyDownHandler = (e: React.KeyboardEvent) =>{
        e.key === "Enter" && onSentButtonClick()
    }
    //callback
    const onSentButtonClick = () =>{
        if(store.getState().dialogsPage.newMessageText.trim() === ''){
            setError('required field');
        }else{
            store.dispatch(sendMessageAC())
        }
    }
    return <Dialogs onSentButtonClick={onSentButtonClick} onEnterKeyPress={enterKeyDownHandler} onInputChange={onMessageInputChangeHandler} error={error} newMessageText={newMessageText} dialogItems={dialogItems} dialogMessages={dialogMessages} onDialogItemClick={onDialogItemClick} />
}

export default DialogsContainer

