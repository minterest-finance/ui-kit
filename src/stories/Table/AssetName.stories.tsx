import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BTCIcon, DAIIcon, USDCIcon, USDTIcon, WETHIcon, MetaMaskSmallIcon, LedgerSmallIcon, TrezorSmallIcon, WalletConnectSmallIcon } from 'assets/svg';

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
    icon: { control: 'select', options: ['BTCIcon', 'DAIIcon', 'USDCIcon', 'USDTIcon', 'WETHIcon'] },
    subicon: { control: 'select', options: ['MetaMask', 'Ledger', 'Trezor', 'WalletConnect']},
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
  <AssetComponent Icon={assetIcons[args.icon]} SubIcon={walletIcons[args.subicon]} {...args} />
);

AssetName.args = {
  isHovered: false,
  isLoading: false,
  title: 'BTC',
  balance: '~17.23',
  tooltipText: 'Your current BTC balance in your wallet',
  icon: 'BTCIcon',
  subicon: 'MetaMask',
};

const assetIcons = {
  'BTCIcon': BTCIcon,
  'DAIIcon': DAIIcon,
  'USDCIcon': USDCIcon,
  'USDTIcon': USDTIcon,
  'WETHIcon': WETHIcon,
};

const walletIcons = {
  'MetaMask': MetaMaskSmallIcon,
  'Ledger': LedgerSmallIcon,
  'Trezor': TrezorSmallIcon,
  'WalletConnect': WalletConnectSmallIcon, 
}
