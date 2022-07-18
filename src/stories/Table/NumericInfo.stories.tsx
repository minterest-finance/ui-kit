import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NumericInfo as NumericComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Table/Components',
  component: NumericComponent,
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

export const NumericInfo: ComponentStory<any> = (args) => (
  <NumericComponent {...args} />
);

NumericInfo.args = {
  usdValue: '0000',
  assetValue: '63.84',
  isLoading: false,
};
