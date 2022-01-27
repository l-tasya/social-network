import React from "react";
import s from './Message.module.scss';
type MessagePropsType = {
    text: string,
    sent: boolean,
    time: string,
}

const Message = (props: MessagePropsType) => {
    return <span className={(props.sent ? s.message__senDED : null) + ' ' + s.message}>
        <span className={s.message__text}>{props.text}</span>
        <span className={s.message__time}>{props.time}</span>
    </span>

}
export default Message;

