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

export const Stats: ComponentStory<typeof StatsWing> = (args) => (
  <div style={{ margin: '30px 0' }}>
    <StatsWing {...args} />
  </div>
);

Stats.args = {
  leftTextTitle: 'Your Total Supply',
  leftTextValue: '58,763,005.74',
  leftTextCurrencty: '$',
  rightTextTitle: 'Your Total Borrow',
  rightTextValue: '58,763,005.74',
  rightTextCurrencty: '$',
  leftTextNotConnected: 'Total Markets Supply',
  rightTextNotConnected: 'Total Markets Borrow',
  netApy: '9.87',
  loading: false,
  connected: false,
  connectClick: () => console.log('test'),
};
