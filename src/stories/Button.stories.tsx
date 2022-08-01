import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, SmallButton, BigButton, CloseButton } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Button/Standard',
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

export const CloseTransparent: ComponentStory<typeof Button> = (args) => (
  <CloseButton {...args} />
);

CloseTransparent.args = {
  children: 'Close',
  disabled: false,
};

export const CloseContained: ComponentStory<typeof Button> = (args) => (
  <CloseButton {...args} />
);

CloseContained.args = {
  children: 'Close',
  disabled: false,
  variant: 'contained',
  color: 'info',
};
