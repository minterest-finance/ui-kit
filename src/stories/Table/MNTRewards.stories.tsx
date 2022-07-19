import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MNTReward as MNTRewardComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Table/Components',
  component: MNTRewardComponent,
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

export const MNTReward: ComponentStory<any> = (args) => (
  <MNTRewardComponent {...args} />
);

MNTReward.args = {
  value: '0.45',
  tooltipText: 'Example Text',
};
