import React, {ChangeEvent, useState} from 'react';
import s from "./Dialogs.module.scss";
import {ArrowRight} from "react-feather";

type MessageSentType = {
    onSentButtonClick: (title: string) => void
}
export const MessageSent: React.FC<MessageSentType> = (props) => {
    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<string | null>();
    let onAddPostButtonClick = () => {
        if (title.trim() !== '') {
            props.onSentButtonClick(title);
            setTitle('')
            setError('')
        } else {
            setError('required field')
        }


    }
    let onEnterKeyPressHandler = (e: React.KeyboardEvent) => {

        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
        }
        if (e.key === 'Enter') {
            onAddPostButtonClick()
        }

    }
    const onChangeCallBack = (e: ChangeEvent<HTMLInputElement>) => {
        if(error !== null){setError(null)}
        setTitle(e.currentTarget.value)
    }

    let textAreaStyles = {
        border: error ? '2px solid lightcoral' : '2px solid #F1F1F1'
    }
    return <>
        <input value={title}
               className={(error && s.errorInput) + ' ' + s.dialogs__input}
               type="text"
               placeholder={'Start typing..'}
               onChange={(e) => onChangeCallBack(e)}
               onKeyPress={onEnterKeyPressHandler}
               style={textAreaStyles}
        />
        <span className={s.dialogs__send}><ArrowRight onClick={()=>onAddPostButtonClick()}/></span>
    </>

}