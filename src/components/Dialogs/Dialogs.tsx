import React from "react";
import s from './Dialogs.module.scss';
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

type DialogsType = {
    name: string
    id: string
}
type MessageType = {
    id: number
    message: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type DialogsPropsType = {
    state: DialogsPageType
}


const Dialogs: React.FC<DialogsPropsType> = (props) => {
    //converting dialog state to DialogItem component
    let dialogElements = props.state.dialogs.map((t) => <DialogsItem key={t.id} name={t.name} id={t.id}/>)
    //converting message state from props, to Message component
    let messageElements = props.state.messages.map((t) => <Message key={t.id} text={t.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs

