import React, { FC } from 'react';

import MaterialButton, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { CloseIcon } from 'assets/svg';

export const Button: FC<ButtonProps> = (props) => <MaterialButton {...props} />;

export const SmallButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'small'} {...props} />
);

export const BigButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'large'} {...props} />
);

export const IconButton = styled(MaterialButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  minWidth: 118,
  height: 48,
  '& .MuiButton-endIcon': {
    '& svg': {
      fill: theme.palette.secondary.main,
    },
  },
}));

export const CloseButton: FC<ButtonProps> = (props) => (
  <IconButton
    variant={'text'}
    size={'medium'}
    endIcon={<CloseIcon />}
    {...props}
  />
);
