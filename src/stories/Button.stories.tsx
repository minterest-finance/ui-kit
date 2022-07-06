import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, SmallButton, BigButton, CloseButton } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

export const Small: ComponentStory<typeof Button> = (args) => (
  <SmallButton {...args} />
);

Small.args = {
  children: 'Supply',
  color: 'primary',
  disabled: false,
};

export const Big: ComponentStory<typeof Button> = (args) => (
  <BigButton {...args} />
);

Big.args = {
  children: 'Supply',
  color: 'primary',
  disabled: false,
};

export const Close: ComponentStory<typeof Button> = (args) => (
  <CloseButton {...args} />
);

Close.args = {
  children: 'Close',
  disabled: false,
};
