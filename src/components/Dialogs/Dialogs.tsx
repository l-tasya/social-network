import React from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import {MessageCircle} from 'react-feather';
import {dialogInputChangeAC, DialogsPageType, fakeDialogsAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {MessageSent} from "./MessageSent";
import {AppStateType} from "../../redux/store/redux-store";
import {useDispatch, useSelector} from "react-redux";


const Dialogs: React.FC = () => {

    let dialogState = useSelector<AppStateType, DialogsPageType>(state => state.dialogsPage)
    let dialogItems = dialogState.dialogs
    let dialogMessages = dialogState.messages
    let error = dialogState.error
    let newMessageText = dialogState.newMessageText
    const dispatch = useDispatch()
    const onDialogItemClick = () => {
        dispatch(fakeDialogsAC())
    }
    const onInputChange = (text: string) => {
        dispatch(dialogInputChangeAC(text))
    }
    const onSentButtonClick = () => {
        dispatch(sendMessageAC())
    }

    //converting state to component

    let dialogElements = dialogItems.map((t) => <DialogsItem onDialogItemClick={onDialogItemClick}
                                                             key={t.id} name={t.name} id={t.id}/>)
    let messageElements = dialogMessages.map((t) => <Message time={t.time} sent={t.sent} key={t.id}
                                                             text={t.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <MessageCircle className={s.dialogIcon}/>
                {dialogElements}
            </div>
            <div className={s.dialogs__messages}>

                {messageElements}
                <div className={s.dialogs__typing}><MessageSent newMessageText={newMessageText}
                                                                error={error} onInputChange={onInputChange}
                                                                onSentButtonClick={onSentButtonClick}/></div>
            </div>
        </div>
    )
}

export default Dialogs

