import React from "react";
import s from './Post.module.scss'
import {Heart} from 'react-feather';
import {ActionsType} from '../../../../redux/state';

type PropsType = {
    message: string,
    img: string
    like: boolean
    id: number
    dispatch: (action: ActionsType)=>void
}
const Post: React.FC<PropsType> = (props) => {
    //todo: beautiful like button and like counter(1.9k, 9k, 9M, ...)
    const onLikeButtonClick = () =>{
        props.dispatch({type: 'LIKE-CLICK', id: props.id-1})
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
            <div className={s.footer}><Heart color={props.like?'red':'black'} onClick={onLikeButtonClick}  size={20} className={s.footer__like}/></div>
        </div>
    )
}
export default Post;







