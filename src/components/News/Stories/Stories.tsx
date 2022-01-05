import React from 'react'
import s from './Stories.module.scss'
import {FeedStoriesType} from '../../../redux/feed-reducer';
import { Story } from './Story/Story';

type StoriesPropsType = {
    feedStories: FeedStoriesType
}

export const Stories: React.FC<StoriesPropsType> = (props)=>{
    return <div className={s.body}>
    <div className={s.stories}>
        {props.feedStories.map(f=><Story key={f.id} story={f}/>)}
    </div>
    </div>
}