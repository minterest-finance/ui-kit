import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BTCIcon, MetaMaskSmallIcon } from 'assets/svg';

import { EnchancedTable as EnchancedTableComponent } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../../theme';

export default {
  title: 'Table',
  component: EnchancedTableComponent,
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

export const EnchancedTable: ComponentStory<any> = (args) => (
  <div style={{ width: 612 }}><EnchancedTableComponent {...args} /></div>
);

// AssetName.args = {
//   isHovered: false,
//   isLoading: false,
//   title: 'BTC',
//   balance: '~17.23',
//   tooltipText: 'Your current BTC balance in your wallet',
// };
