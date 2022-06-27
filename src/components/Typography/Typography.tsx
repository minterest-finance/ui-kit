import React, { FC } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

// @ts-ignore
import OpenSansRegular from '../../assets/fonts/OpenSans-Regular.ttf';
// @ts-ignore
import OpenSansSemiBold from '../../assets/fonts/OpenSans-SemiBold.ttf';
// @ts-ignore
import UbuntuBold from '../../assets/fonts/Ubuntu-Bold.ttf';

type Props = {
  text: string;
} & TypographyProps;

const theme = createTheme({
  typography: {
    fontFamily: 'Ubuntu',
    h1: {
      fontSize: 48,
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      lineHeight: 1.3,
    },
    h2: {
      fontSize: 36,
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      lineHeight: 1.3,
    },
    h3: {
      fontSize: 20,
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      lineHeight: 1.3,
    },
    h4: {
      fontSize: 16,
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      lineHeight: 1.5,
    },
    button: {
      fontSize: 16,
      fontFamily: 'Open Sans',
      fontWeight: 600,
      textTransform: 'none',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 20,
      fontFamily: 'Open Sans',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: 16,
      fontFamily: 'Open Sans',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: 12,
      fontFamily: 'Open Sans',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: 12,
      fontFamily: 'Open Sans',
      fontWeight: 400,
      lineHeight: 1.3,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 700;
          src: url(${UbuntuBold}) format('truetype');
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src: url(${OpenSansSemiBold}) format('truetype');
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(${OpenSansRegular}) format('truetype');
        }
      `,
    },
  },
});

const TypographyComponent: FC<Props> = ({ text, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography {...props}>{text}</Typography>
    </ThemeProvider>
  );
};

export default TypographyComponent;
