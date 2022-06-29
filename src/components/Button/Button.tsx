import React, { FC } from 'react';

import MaterialButton, { ButtonProps } from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

export const Button: FC<ButtonProps> = (props) => (
  <>
    <CssBaseline enableColorScheme />
    <MaterialButton {...props} />
  </>
);

export const SmallButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'small'} {...props} />
);

export const BigButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'large'} {...props} />
);
