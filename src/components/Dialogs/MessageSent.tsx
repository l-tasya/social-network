import React from 'react';
import s from "./Dialogs.module.scss";
import {ArrowRight} from "react-feather";

type MessageSentType = {
    newMessageText: string
    error: string | null
    onInputChange: (newValue: string) => void
    onSentButtonClick: () => void
}
export const MessageSent: React.FC<MessageSentType> = (props) => {
    const onEnterKeyPress = (e: React.KeyboardEvent) => {
        e.key === 'Enter' && props.onSentButtonClick()
    }
    return <>
        <input value={props.newMessageText}
               className={(props.error && s.errorInput) + ' ' + s.dialogs__input}
               type="text"
               placeholder={'Start typing..'}
               onChange={(e) => props.onInputChange(`${e.currentTarget.value}`)}
               onKeyPress={onEnterKeyPress}
        />
        <span className={s.dialogs__send}><ArrowRight onClick={props.onSentButtonClick}/></span>
    </>

}