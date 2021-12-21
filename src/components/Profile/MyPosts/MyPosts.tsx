import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.scss'
import Post from './Post/Post';
import {Plus} from 'react-feather';
import {ActionsType, addPostAC, postInputChangeAC, PostType} from '../../../redux/state';


type MyPostsPropsType = {
    state: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType)=>void
}

const MyPosts: React.FC<MyPostsPropsType> = ({state, newPostText,dispatch}) => {
    //converting post state to Post component
    let [error, setError] = useState<'required field'|''>('')
    let postElements = state.map((t) => <Post dispatch={dispatch} key={t.id} id={t.id} message={t.message} img={t.src} like={t.like}/>)

    //Event Handlers
    let onAddPostButtonClick = () => {
        if (newPostText.trim() !== '') {
            dispatch(addPostAC(2))
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
            onAddPostButtonClick()
        }

    }

    //Flux circulation by textarea value
    let onTextAreaChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(postInputChangeAC(`${event.currentTarget.value}`))
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
                        <img src="https://steamuserimages-a.akamaihd.net/ugc/97227892816512942/9D008E4EEFC6BFC6D3E283526BB6276393EA19F4/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" alt=""/>
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