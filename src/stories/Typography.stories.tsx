import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from 'components';

import { getTheme, ThemeProvider, CssBaseline } from '../theme';

export default {
  title: 'Typography',
  component: Typography,
  args: {
    mode: 'light',
    text: 'The quick brown fox jumps over the lazy dog.',
  },
  argTypes: {
    mode: { control: 'select', options: ['light', 'dark'] },
    text: { control: 'text' },
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
} as ComponentMeta<typeof Typography>;

export const H1: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h1'} />
);

export const H2: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h2'} />
);

export const H3: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h3'} />
);

export const H4: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h4'} />
);

export const Button: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'button'} />
);

export const CopyL: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'body1'} />
);

export const CopyM: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'body2'} />
);

export const CopySSemibold: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'subtitle1'} />
);

export const CopySRegular: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'subtitle2'} />
);

export const Overline: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'overline'} />
);
