import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, SmallButton, BigButton } from 'components';

import { themes } from '../theme';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Small: ComponentStory<typeof Button> = (args) => (
  <SmallButton {...args} onClick={undefined} />
);

Small.args = {
  theme: themes['light'],
  children: 'Supply',
  color: 'primary',
  disabled: false,
};

export const Big: ComponentStory<typeof Button> = (args) => (
  <BigButton {...args} theme={themes['light']} onClick={undefined} />
);

Big.args = {
  theme: themes['light'],
  children: 'Supply',
  color: 'primary',
  disabled: false,
};
