import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PrefixedValue } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Typography/PrefixedValue',
  component: PrefixedValue,
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
} as ComponentMeta<typeof PrefixedValue>;

export const Default: ComponentStory<typeof PrefixedValue> = (args) => (
  <PrefixedValue {...args} />
);

Default.args = {
  value: '6,726,763,007.10',
  variant: 'default',
};

export const Connected: ComponentStory<typeof PrefixedValue> = (args) => (
  <PrefixedValue {...args} />
);

Connected.args = {
  value: '6,726,763,007.10',
  variant: 'connected',
};

export const Percent: ComponentStory<typeof PrefixedValue> = (args) => (
  <PrefixedValue {...args} />
);

Percent.args = {
  value: '100.00',
  symbol: '%',
  prefix: false,
  postfix: true,
};

export const Loading: ComponentStory<typeof PrefixedValue> = (args) => (
  <PrefixedValue {...args} />
);

Loading.args = {
  value: '100.00',
  symbol: '%',
  prefix: false,
  postfix: true,
  isLoading: true,
};
