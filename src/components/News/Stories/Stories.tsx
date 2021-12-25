import React from 'react'
import s from './Stories.module.scss'
import { Story } from './Story/Story'

type StoriesPropsType = {

}

export const Stories: React.FC<StoriesPropsType> = ()=>{
    return <div className={s.stories}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
    </div>
}