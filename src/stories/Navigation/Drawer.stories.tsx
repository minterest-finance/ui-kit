import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CssBaseline, getTheme, ThemeProvider } from 'theme';

import { DrawerMenu, SmallButton } from 'components';

export default {
  title: 'Navigation/Drawer',
  component: DrawerMenu,
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
} as ComponentMeta<typeof DrawerMenu>;

export const Menu: ComponentStory<typeof DrawerMenu> = (args) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <SmallButton onClick={() => setOpen((prev) => !prev)}>
        {isOpen ? 'Close menu' : 'Open menu'}
      </SmallButton>
      <DrawerMenu
        {...args}
        isOpen={isOpen}
        onLinkClick={() => setOpen(false)}
        onClose={() => setOpen(false)}
      />
    </React.Fragment>
  );
};

Menu.args = {
  activeRoute: '/dashboard',
  title: 'Menu',
  links: [
    { name: 'Markets', route: '/', disabled: false },
    { name: 'Dashboard', route: '/dashboard', disabled: false },
    { name: 'Governance', route: '/governance', disabled: true },
  ],
  isOpen: false,
};
