import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from 'components';

export default {
  title: 'Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const H1: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h1'} />
);

H1.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const H2: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h2'} />
);

H2.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const H3: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h3'} />
);

H3.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const H4: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'h4'} />
);

H4.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const Button: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'button'} />
);

Button.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const CopyL: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'body1'} />
);

CopyL.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const CopyM: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'body2'} />
);

CopyM.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const CopySSemibold: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'subtitle1'} />
);

CopySSemibold.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};

export const CopySRegular: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} variant={'subtitle2'} />
);

CopySRegular.args = {
  text: 'The quick brown fox jumps over the lazy dog.',
};
