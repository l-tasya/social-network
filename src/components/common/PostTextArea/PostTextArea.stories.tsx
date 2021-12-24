import { ComponentStory } from '@storybook/react';
import React from 'react';
import {PostTextArea} from './PostTextArea';

export default {
    title: 'PostTextarea',
    component: PostTextArea
}
const Template: ComponentStory<typeof PostTextArea> = (args) =>{
    return <PostTextArea value={'title'} {...args}/>
}

export const Primary = Template.bind({})
Primary.args = {
}