import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircleButton, Typography } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Button/Circle',
  component: CircleButton,
  args: {
    mode: 'light',
  },
  argTypes: {
    mode: { control: 'select', options: ['light', 'dark'] },
  },
  decorators: [
    (Story, Context) => {
      return (
        <ThemeProvider theme={getTheme(Context.args.mode)}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      );
    },
  ],
} as ComponentMeta<typeof CircleButton>;

export const Default: ComponentStory<typeof CircleButton> = (args) => (
  <CircleButton {...args} />
);

Default.args = {
  children: <Typography variant='h3' text={'Connect wallet'} />,
};

export const Connected: ComponentStory<typeof CircleButton> = (args) => (
  <CircleButton {...args} connected />
);

Connected.args = {
  children: <Typography variant='h3' text={'Connect wallet'} />,
};
