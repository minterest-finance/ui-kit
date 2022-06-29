import React, { FC } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { deepmerge } from '@mui/utils';

import { fonts, typography } from '../globals';

type Props = {
  text: string;
} & TypographyProps;

const theme = createTheme(deepmerge(fonts, typography));

const TypographyComponent: FC<Props> = ({ text, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography {...props}>{text}</Typography>
    </ThemeProvider>
  );
};

export default TypographyComponent;
