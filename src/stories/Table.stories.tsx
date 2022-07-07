import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AssetName as AssetComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Table/Components',
  component: AssetComponent,
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

export const AssetName: ComponentStory<any> = (args) => (
  <AssetComponent {...args} />
);

AssetName.args = {
  variant: 'normal',
};
