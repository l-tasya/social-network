import React, {ChangeEvent, useState} from 'react';
import s from './PostTextArea.module.scss'
import {Plus} from 'react-feather';
import {UserInfoType} from '../../../redux/state';


type PostTextAreaPropsType = {
    value: string
    addItem: ()=>void
    onChangeText: (text: string)=>void
    user: UserInfoType
}

export const PostTextArea: React.FC<PostTextAreaPropsType> = (props) => {
    let [error, setError] = useState<string | null>();
    let onAddPostButtonClick = () => {
        if (props.value.trim() !== '') {
            props.addItem();
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
    const onChangeCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setError(null)
        props.onChangeText(e.currentTarget.value)
    }

    let textAreaStyles = {
        border: error?'2px solid lightcoral':'2px solid #F1F1F1'
    }
    return (<div className={s.postADD}>
            <button className={s.postADD__sendButton} onClick={onAddPostButtonClick}>
                <Plus/>
                <>Create post</>
            </button>

            <div className={s.postADD__inputArea}>
                {error && <span className={s.postADD__spanERROR}>{error}</span>}
                <img src={props.user.imageSRC} alt=""/>
                <textarea
                    className={s.textarea}
                    onChange={onChangeCallBack}
                    onKeyPress={onEnterKeyPressHandler}
                    placeholder={'What\'s on your mind'}
                    cols={30}
                    rows={10}
                    value={props.value}
                    style={textAreaStyles}
                    onBlur={()=>setError(null)}
                >
            </textarea>

            </div>
        </div>
    )


}