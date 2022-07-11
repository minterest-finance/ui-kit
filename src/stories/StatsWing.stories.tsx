import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatsWing } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Stats Wing',
  component: StatsWing,
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
} as ComponentMeta<typeof StatsWing>;

export const Header: ComponentStory<typeof StatsWing> = (args) => (
  <StatsWing {...args} />
);

Header.args = {
  leftTextTitle: 'Your Total Supply',
  leftTextValue: '58,763,005.74',
  leftTextCurrencty: '$',
  rightTextTitle: 'Your Total Borrow',
  rightTextValue: '58,763,005.74',
  rightTextCurrencty: '$',
  loading: false,
  connected: false,
};