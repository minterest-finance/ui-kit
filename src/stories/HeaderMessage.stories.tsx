import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HeaderMessageComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Header Message',
  component: HeaderMessageComponent,
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
} as ComponentMeta<typeof HeaderMessageComponent>;

export const Header: ComponentStory<typeof HeaderMessageComponent> = (args) => (
  <HeaderMessageComponent {...args} />
);

Header.args = {
  title: 'Welcome to Minterest BETA!',
  firstLine:
    'Open to a limited audience of community members. Access is only available to MNT token holders. Your connected wallet is not associated to MNT on Minterest. For access, sign up here.',
  onClose: () => console.log('click'),
};
