import React from "react";
import s from '../Dialogs.module.scss';

type MessagePropsType = {
    text: string,
    sent: boolean,
}

const Message = (props: MessagePropsType) => {
    return <span className={(props.sent?s.senDED:null) + ' ' + s.message}>{props.text}</span>

}
export default Message;

