import React, { useState } from "react";
import s from './Post.module.scss'
import {Heart} from 'react-feather';

type PropsType = {
    message: string,
    img: string
    id: number
}
const Post: React.FC<PropsType> = (props) => {
    let [like, setLike] = useState<boolean>(false)
    const onLikeButtonClick = () =>{
        setLike(!like)
    }
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
            <div className={s.footer}><Heart color={like?'red':'black'} onClick={onLikeButtonClick}  size={20} className={s.footer__like}/></div>
        </div>
    )
}
export default Post;







