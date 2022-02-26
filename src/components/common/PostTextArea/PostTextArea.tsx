import React, {ChangeEvent, useCallback, useState} from 'react';
import s from './PostTextArea.module.scss'
import {Plus} from 'react-feather';
import {ProfileUserType} from '../../../redux/profile-reducer';


type PostTextAreaPropsType = {
    addItem: (text: string) => void
    user: ProfileUserType | null
}

export const PostTextArea: React.FC<PostTextAreaPropsType> = React.memo((props) => {
    let [title, setTitle] = useState<string>('')
    let [error, setError] = useState<string | null>();
    let onAddPostButtonClick = () => {
        if (title.trim() !== '') {
            props.addItem(title);
            setTitle('')
            setError('')
        } else {
            setError('required field')
        }


    }
    let onEnterKeyPressHandler  = (e: React.KeyboardEvent) => {

        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
        }
        if (e.key === 'Enter') {
            onAddPostButtonClick()
        }

    }
    const onChangeCallBack = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        if(error !== null){setError(null)}
        setTitle(e.currentTarget.value)
    },[])

    let textAreaStyles = {
        border: error ? '2px solid lightcoral' : '2px solid #F1F1F1'
    }
    console.log('h')
    return (<div className={s.postADD}>
            <button className={s.postADD__sendButton} onClick={onAddPostButtonClick}>
                <Plus/>
                <>Create post</>
            </button>

            <div className={s.postADD__inputArea}>
                {error && <span className={s.postADD__spanERROR}>{error}</span>}
                <img src={props.user?.photos.small} alt=""/>
                <textarea
                    className={s.textarea}
                    onChange={onChangeCallBack}
                    onKeyPress={onEnterKeyPressHandler}
                    placeholder={'What\'s on your mind'}
                    cols={30}
                    rows={10}
                    value={title}
                    style={textAreaStyles}
                    onBlur={() => setError(null)}
                >
            </textarea>

            </div>
        </div>
    )


})