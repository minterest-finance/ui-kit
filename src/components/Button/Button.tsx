import React, { FC } from 'react';

import MaterialButton, { ButtonProps } from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { Theme } from 'theme';

import { fonts, typography } from '../globals';

type Props = {
  theme: Theme;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  buttonProps?: ButtonProps;
};

export const Button: FC<Props> = ({
  color = "primary",
  disabled,
  onClick,
  theme,
  children,
  buttonProps = {},
}) => {
  const {
    button: { primary, secondary, disabled: disabledButtonColor },
  } = theme;

  const button = {
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          disabled: {
            backgroundColor: disabledButtonColor,
          },
          sizeSmall: {
            borderRadius: '4px',
            padding: '4px 16px',
            minWidth: '88px',
            ...typography.typography.button,
          },
          sizeLarge: {
            borderRadius: '8px',
            padding: '16px 32px',
            minWidth: '125px',
            ...typography.typography.h3,
          },
        },
      },
    },
  };

  const muiTheme = createTheme(deepmerge(fonts, button));

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <MaterialButton
        variant='contained'
        color={color}
        disabled={disabled}
        onClick={onClick}
        {...buttonProps}
      >
        {children}
      </MaterialButton>
    </ThemeProvider>
  );
};

export const SmallButton: FC<Props> = ({ buttonProps={}, ...rest }) => (
  <Button
    {...rest}
    buttonProps={{ ...buttonProps, variant: 'contained', size: 'small' }}
  />
);

export const BigButton: FC<Props> = ({ buttonProps={}, ...rest }) => (
  <Button
    {...rest}
    buttonProps={{ ...buttonProps, variant: 'contained', size: 'large' }}
  />
);
