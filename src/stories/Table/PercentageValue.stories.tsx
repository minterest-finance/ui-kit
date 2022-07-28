import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PercentageInfo as PercentageInfoComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Table/Components',
  component: PercentageInfoComponent,
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
} as ComponentMeta<any>;

export const PercentageInfo: ComponentStory<any> = (args) => (
  <PercentageInfoComponent {...args} />
);

PercentageInfo.args = {
  percentageValue: '2.38',
  loading: false,
  netApyOnly: false,
  mntRewardValue: '0.45',
  tooltipText: 'MNT Reward Tooltip',
};
