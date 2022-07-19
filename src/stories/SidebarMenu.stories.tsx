import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarMenuComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Sidebar Menu',
  component: SidebarMenuComponent,
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
} as ComponentMeta<typeof SidebarMenuComponent>;

export const Menu: ComponentStory<typeof SidebarMenuComponent> = (args) => (
  <SidebarMenuComponent {...args} />
);

Menu.args = {
  title: 'Menu',
  links: [
    { name: 'Markets', route: '/' },
    { name: 'Dashboard', route: '/' },
    { name: 'Governance', route: '/' },
  ],
  isOpen: false,
  isMenuActive: false,
};
