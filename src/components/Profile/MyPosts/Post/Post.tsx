import React from "react";
import s from './Post.module.scss'
import {Heart} from 'react-feather';

type PropsType = {
    message: string,
    img: string
}
const Post: React.FC<PropsType> = (props) => {
    //todo: beautiful like button and like counter(1.9k, 9k, 9M, ...)
    return (
        <div className={s.post}>
            <div className={s.post__title}>
                <img src={props.img} alt="" className={s.post__img}/>
                <div>
                    <div className={s.post__name}>Name Surname</div>
                    <div className={s.post__time}>4 hour ago</div>
                </div>
            </div>
            <div className={s.post__text}>
                <div>{props.message}</div>
            </div>
            <div className={s.footer}><Heart size={20} className={s.footer__like}/>1.2M Like</div>
            {/*<div className={s.post__buttons}>*/}
            {/*    <div>♥</div>*/}
            {/*    12 Like*/}
            {/*    <div>comment</div>*/}
            {/*</div>*/}
            {/*<div className={s.post__like}>♥</div>*/}
        </div>
    )
}
export default Post;







