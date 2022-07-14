import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  BTCIcon,
  MetaMaskSmallIcon,
} from 'assets/svg';

import { AssetName as AssetComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Table/Components',
  component: AssetComponent,
  args: {
    mode: 'light',
  },
  argTypes: {
    mode: { control: 'select', options: ['light', 'dark'] },
    Icon: {
      table: {
        disable: true,
      },
    },
    SubIcon: {
      table: {
        disable: true,
      },
    },
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
  <AssetComponent
    Icon={BTCIcon}
    SubIcon={MetaMaskSmallIcon}
    {...args}
  />
);

AssetName.args = {
  isHovered: false,
  isLoading: false,
  title: 'BTC',
  balance: '~17.23',
  tooltipText: 'Your current BTC balance in your wallet',
};