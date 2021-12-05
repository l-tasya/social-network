import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.scss';
import Message from './Message/Message';
import DialogsItem from './DialogsItem/DialogsItem';
import {ArrowRight, MessageCircle} from 'react-feather';

type DialogsType = {
    name: string
    id: string
}
type MessageType = {
    id: number
    message: string
    sent: boolean
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    messageCurrentValue: string
}
type DialogsPropsType = {
    state: DialogsPageType
    changeMessage: (text: string) => void
    sendMessage: ()=>void
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    //local state
    let [error, setError] = useState<string|null>(null);
    //converting state to component
    let dialogElements = props.state.dialogs.map((t) => <DialogsItem key={t.id} name={t.name} id={t.id}/>)
    let messageElements = props.state.messages.map((t) => <Message sent={t.sent} key={t.id} text={t.message}/>)

    //event handlers
    const onMessageInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        props.changeMessage(e.currentTarget.value)
    }
    const enterKeyDownHandler = (e: React.KeyboardEvent) =>{
        e.key === "Enter" && onSentButtonClick()
    }
    //callback
    const onSentButtonClick = () =>{
        if(props.state.messageCurrentValue.trim() === ''){
            setError('required field');
        }else{
            props.sendMessage()
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <MessageCircle className={s.dialogIcon}/>
                {dialogElements}
            </div>
            <div className={s.dialogs__messages}>
                {messageElements}
                <div className={s.dialogs__typing}><input value={props.state.messageCurrentValue}
                                                          className={(error&&s.errorInput) + ' ' + s.dialogs__input} type="text"
                                                          placeholder={'Start typing..'}
                                                          onChange={onMessageInputChangeHandler}
                onKeyPress={enterKeyDownHandler}/><span
                    className={s.dialogs__send}><ArrowRight  onClick={onSentButtonClick}/></span></div>
            </div>

        </div>
    )
}

export default Dialogs

