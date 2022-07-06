import React, { FC } from 'react';

import MaterialButton, { ButtonProps } from '@mui/material/Button';

import classes from './CloseButton.module.scss';

import CloseIcon from '../../assets/svg/closeIcon.svg';

export const Button: FC<ButtonProps> = (props) => <MaterialButton {...props} />;

export const SmallButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'small'} {...props} />
);

export const BigButton: FC<ButtonProps> = (props) => (
  <Button variant={'contained'} size={'large'} {...props} />
);

export const CloseButton: FC<ButtonProps> = (props) => {
  return (
    <button className={classes.closeButton} {...props}>
      <span>Close</span>
      <div className={classes.closeIcon}>
        <CloseIcon />
      </div>
    </button>
  );
};
