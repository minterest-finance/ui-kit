import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderCategory as HeaderComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Table/Components',
  component: HeaderComponent,
  args: {
    mode: 'light',
  },
  argTypes: {
    mode: { control: 'select', options: ['light', 'dark'] },
    sortOrder: { control: 'select', options: ['asc', 'desc'] },
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

export const HeaderCategory: ComponentStory<any> = (args) => (
  <HeaderComponent {...args} />
);

HeaderCategory.args = {
  label: 'Your Supply',
  sortOrder: 'asc',
  sorted: false,
};
