import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import {ArrowRight, MessageCircle} from 'react-feather';
import {DialogsType, MessagesType} from '../../redux/dialogs-reducer';
import {MessageSent} from "./MessageSent";

type DialogsPropsType = {
    dialogItems: DialogsType
    dialogMessages: MessagesType
    onDialogItemClick: () => void
    newMessageText: string
    error: string | null
    onInputChange: (newValue: string) => void
    onSentButtonClick: () => void
}


const Dialogs: React.FC<DialogsPropsType> = ({
                                                 dialogItems,
                                                 dialogMessages,
                                                 onDialogItemClick,
                                                 newMessageText,
                                                 error,
                                                 onInputChange,
                                                 onSentButtonClick
                                             }) => {

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

