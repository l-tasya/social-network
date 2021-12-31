import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import {ArrowRight, MessageCircle} from 'react-feather';
import {DialogsType, MessagesType} from '../../redux/state';

type DialogsPropsType = {
    dialogItems: DialogsType
    dialogMessages: MessagesType
    onDialogItemClick: ()=>void
    newMessageText: string
    error: string|null
    onInputChange: (e: ChangeEvent<HTMLInputElement>)=>void
    onEnterKeyPress: (e: React.KeyboardEvent)=>void
    onSentButtonClick: ()=>void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    //converting state to component
    let dialogElements = props.dialogItems.map((t) => <DialogsItem onDialogItemClick={props.onDialogItemClick} key={t.id} name={t.name} id={t.id}/>)
    let messageElements = props.dialogMessages.map((t) => <Message sent={t.sent} key={t.id} text={t.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <MessageCircle className={s.dialogIcon}/>
                {dialogElements}
            </div>
            <div className={s.dialogs__messages}>
                {messageElements}
                <div className={s.dialogs__typing}><input value={props.newMessageText}
                                                          className={(props.error&&s.errorInput) + ' ' + s.dialogs__input} type="text"
                                                          placeholder={'Start typing..'}
                                                          onChange={props.onInputChange}
                onKeyPress={props.onEnterKeyPress}/><span
                    className={s.dialogs__send}><ArrowRight  onClick={props.onSentButtonClick}/></span></div>
            </div>

        </div>
    )
}

export default Dialogs

