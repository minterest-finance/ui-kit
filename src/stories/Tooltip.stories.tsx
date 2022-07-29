import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MetaMaskSmallIcon } from 'assets/svg';
import { TooltipWrapper, Typography } from 'components';

import { CssBaseline, getTheme, ThemeProvider } from '../theme';

export default {
  title: 'Tooltip',
  component: TooltipWrapper,
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
} as ComponentMeta<typeof TooltipWrapper>;

export const WithIcon: ComponentStory<typeof TooltipWrapper> = (args) => (
  <TooltipWrapper {...args} />
);

WithIcon.args = {
  children: 'Net APY',
  title: 'This is your net APY',
};

export const WithoutIcon: ComponentStory<typeof TooltipWrapper> = (args) => (
  <TooltipWrapper {...args} />
);

WithoutIcon.args = {
  children: 'Net APY',
  withoutIcon: true,
  title: 'This is your net APY',
};

export const CustomIcon: ComponentStory<typeof TooltipWrapper> = (args) => (
  <TooltipWrapper {...args} />
);

CustomIcon.args = {
  children: 'Metamask',
  icon: MetaMaskSmallIcon,
  title: 'This is your net APY',
};

export const IconOnly: ComponentStory<typeof TooltipWrapper> = (args) => (
  <TooltipWrapper {...args} />
);

IconOnly.args = {
  title: 'Tooltip text',
  placement: 'top',
};

export const CustomTitle: ComponentStory<typeof TooltipWrapper> = (args) => (
  <TooltipWrapper {...args} />
);

CustomTitle.args = {
  children: 'Net APY',
  title: (
    <Typography sx={{ padding: '10px' }} variant='h2' text={'Custom title'} />
  ),
  placement: 'right',
};
