import { PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

import OpenSansRegular from './assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from './assets/fonts/OpenSans-SemiBold.ttf';
import UbuntuBold from './assets/fonts/Ubuntu-Bold.ttf';

export { ThemeProvider, useTheme } from '@mui/material/styles';
export { default as CssBaseline } from '@mui/material/CssBaseline';

export const getTheme = (mode: PaletteMode): Theme =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#F3F4F5' : '#061953',
      },
      primary: {
        main: mode === 'light' ? '#0C2D9C' : '#ffffff',
      },
      secondary: {
        main: '#061953',
      },
      // example todo remove later
      custom: {
        main: 'red',
        dark: '#061953',
        light: '#f6f7f9',
      },
      action: {
        disabledBackground: '#F0F1F2',
        disabled: '#6D7692',
        disabledOpacity: 0.08,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 360,
        md: 767,
        lg: 1249,
        xl: 1440,
      },
    },
    typography: {
      allVariants: {
        color: mode === 'light' ? '#061953' : '#ffffff',
      },
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
        textTransform: 'none',
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
      // example todo remove later
      custom: {
        fontSize: 50,
        fontFamily: 'Open Sans',
        fontWeight: 700,
        lineHeight: 1.5,
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
      MuiButton: {
        styleOverrides: {
          disabled: {},
          sizeSmall: {
            borderRadius: '4px',
            padding: '4px 16px',
            minWidth: '88px',
          },
          sizeLarge: {
            borderRadius: '8px',
            padding: '16px 32px',
            minWidth: '125px',

            // h3
            fontSize: 20,
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
            lineHeight: 1.3,
            textTransform: 'none',
          },
        },
      },
    },
  });
