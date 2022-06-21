// Button.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { H1 } from 'components/Typography';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Typography',
    component: H1,
} as ComponentMeta<typeof H1>;


export const Heading1: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

Heading1.args = {
    text:"H1"
};
