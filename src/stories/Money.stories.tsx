import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Money } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Typography/Money',
  component: Money,
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
} as ComponentMeta<typeof Money>;

export const Default: ComponentStory<typeof Money> = (args) => (
  <Money {...args} />
);

Default.args = {
  value: '6,726,763,007.10',
  variant: 'default',
};

export const Connected: ComponentStory<typeof Money> = (args) => (
  <Money {...args} />
);

Connected.args = {
  value: '6,726,763,007.10',
  variant: 'connected',
};
