import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import s from './PostTextArea.module.scss'

type defaultTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

type PostTextAreaPropsType = defaultTextAreaProps & {
    userImage: string
    error: 'required field' | ''
}

export const PostTextArea: React.FC<PostTextAreaPropsType> = ({
                                                                  error, userImage, ...restProps
                                                              }) => {
    return (
        <div className={s.textarea}>
            <img src={userImage} alt=""/>
            <textarea className={s.errorBorder}
                cols={30}
                rows={10}
                {...restProps}
            >
            </textarea>
            {error && <span className={s.errorMessage}>{error}</span>}
        </div>
    )


}