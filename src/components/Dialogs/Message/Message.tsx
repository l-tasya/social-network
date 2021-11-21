import React from "react";
import s from '../Dialogs.module.scss';

type MessagePropsType = {
    text: string,
}

const Message = (props: MessagePropsType) => {
    return <div className={s.message}>{props.text}</div>

}
export default Message;

