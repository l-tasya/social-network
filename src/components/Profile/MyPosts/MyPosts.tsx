import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';
import {Plus} from 'react-feather';

//types
type PostType = {
    id: number
    src: string
    message: string
}

type MyPostsPropsType = {
    state: Array<PostType>
    addPost: (src: 1 | 2) => void
    newPostText: string
    changeInput: (text: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = ({state, addPost, newPostText,changeInput}) => {
    //converting post state to Post component
    let [error, setError] = useState<'required field'|''>('')
    let postElements = state.map((t) => <Post key={t.id} message={t.message} img={t.src}/>)

    //Event Handlers
    let onAddPostButtonClick = (e: any) => {
        if (newPostText.trim() !== '') {
            addPost(2)
            setError('')
        } else {
            setError('required field')
        }


    }
    let onEnterKeyPressHandler = (e: React.KeyboardEvent) => {
        setError('')
        if (e.key === 'Enter' && !e.shiftKey)
        {
            e.preventDefault();
        }
        if (e.key === 'Enter') {
            onAddPostButtonClick(e)
        }

    }

    //Flux circulation by textarea value
    let onTextAreaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        changeInput(`${event.currentTarget.value}`)
    }
    return (
        <div className={s.myPosts}>
            <div className={s.myPosts__add}>
                <button className={s.addPost} onClick={onAddPostButtonClick}>
                    <Plus/>
                    <>Create post</>
                </button>
                <div className={s.myPosts__textarea}>
                    <div>
                        <img src="https://lh3.googleusercontent.com/NVZ8or0PYUHCoVjY0CGEMME_laKQ3524I4IbsZDW5ybB_0buBVhtN3C6zrMdLiCvDJE=s60" alt=""/>
                    </div>
                     <textarea
                         onChange={(e)=>(onTextAreaChangeHandler(e))}
                         value={newPostText}
                         onKeyPress={onEnterKeyPressHandler}
                         placeholder={`What's on your mind?`}
                         cols={30}
                         rows={10}
                         className={error === 'required field'?s.error:''}
                     >
                     </textarea>
                    {error && <span className={s.errorMessage}>{error}</span>}
                </div>
            </div>
            <div className={s.myPosts__posts}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;