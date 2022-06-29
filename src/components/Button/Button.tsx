import React, { FC } from 'react';

import MaterialButton, { ButtonProps } from '@mui/material/Button';

export const Button: FC<ButtonProps> = (props) => <MaterialButton {...props} />;

export const SmallButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'small'} {...props} />
);

export const BigButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'large'} {...props} />
);
