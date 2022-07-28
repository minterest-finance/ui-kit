import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navlink } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Navigation/Navlink',
  component: Navlink,
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
} as ComponentMeta<typeof Navlink>;

export const Default: ComponentStory<typeof Navlink> = (args) => (
  <Navlink onClick={(r) => alert(r)} {...args} />
);

Default.args = {
  name: 'Dashboard',
  route: '/dashboard',
  active: false,
  disabled: false,
};

export const Disabled: ComponentStory<typeof Navlink> = (args) => (
  <Navlink onClick={(r) => alert(r)} {...args} />
);

Disabled.args = {
  name: 'Dashboard',
  route: '/dashboard',
  active: false,
  disabled: true,
};

export const Active: ComponentStory<typeof Navlink> = (args) => (
  <Navlink onClick={(r) => alert(r)} {...args} />
);

Active.args = {
  name: 'Dashboard',
  route: '/dashboard',
  active: true,
  disabled: false,
};
