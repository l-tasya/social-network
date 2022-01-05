import React from 'react'
import {FeedStoryType} from '../../../../redux/feed-reducer'
import s from './Story.module.scss'

type StoryPropsType = {
    story: FeedStoryType
}

export const Story: React.FC<StoryPropsType> = ({story})=>{
    let storyStyles = {
       background: `${story.story}`
    }

    return <div className={s.story} style={storyStyles}>
        <div className={s.user}>
            <img className={s.user__image} src={story.user.imageSRC} alt=""/>
            <div className={s.user__name}>{story.user.name}</div>
        </div>
    </div>
}