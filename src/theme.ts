import { PaletteColor, PaletteColorOptions, PaletteMode } from '@mui/material';
import { createTheme, Theme } from '@mui/material/styles';

import OpenSansBold from './assets/fonts/OpenSans-Bold.ttf';
import OpenSansRegular from './assets/fonts/OpenSans-Regular.ttf';
import OpenSansSemiBold from './assets/fonts/OpenSans-SemiBold.ttf';
import UbuntuBold from './assets/fonts/Ubuntu-Bold.ttf';

export { ThemeProvider, useTheme, useMediaQuery } from '@mui/material';
export { default as CssBaseline } from '@mui/material/CssBaseline';

declare module '@mui/material/styles' {
  // custom colors
  interface Palette {
    custom: PaletteColor;
    grey99: PaletteColor;
    chartsBlue30: PaletteColor;
  }
  interface PaletteOptions {
    custom?: PaletteColorOptions;
    grey99?: PaletteColorOptions;
    chartsBlue30?: PaletteColorOptions;
  }

  // custom typography
  interface TypographyVariants {
    table1: React.CSSProperties;
    table2: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    table1: React.CSSProperties;
    table2: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    table1: true;
    table2: true;
  }
}

export const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    md: 767,
    lg: 1249,
    xl: 1440,
  },
};

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
        dark: 'rgba(254, 254, 254, 0.5)',
      },
      info: {
        main: '#fafafa',
      },
      // example todo remove later
      custom: {
        main: 'red',
        contrastText: '#FCFCFC',
        dark: '#061953',
        light: '#f6f7f9',
      },
      action: {
        disabledBackground: '#F0F1F2',
        disabled: '#6D7692',
        disabledOpacity: 0.08,
        active: 'rgba(12, 45, 156, 0.08)',
      },
      grey99: {
        main: '#FCFCFC',
      },
      chartsBlue30: {
        main: 'rgba(20, 110, 255, 0.3)',
      },
    },
    breakpoints,
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
        [`@media (max-width:${breakpoints.values.lg}px)`]: {
          fontSize: 36,
        },
        [`@media (max-width:${breakpoints.values.md}px)`]: {
          fontSize: 28,
          lineHeight: 1.2,
        },
      },
      h2: {
        fontSize: 36,
        fontFamily: 'Ubuntu',
        fontWeight: 'bold',
        lineHeight: 1.3,
        [`@media (max-width:${breakpoints.values.lg}px)`]: {
          fontSize: 28,
        },
        [`@media (max-width:${breakpoints.values.md}px)`]: {
          fontSize: 20,
        },
      },
      h3: {
        fontSize: 20,
        fontFamily: 'Ubuntu',
        fontWeight: 'bold',
        lineHeight: 1.3,
        textTransform: 'none',
        [`@media (max-width:${breakpoints.values.lg}px)`]: {
          fontSize: 20,
        },
        [`@media (max-width:${breakpoints.values.md}px)`]: {
          fontSize: 16,
          lineHeight: 1.5,
        },
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
        [`@media (max-width:${breakpoints.values.lg}px)`]: {
          fontSize: 18,
        },
        [`@media (max-width:${breakpoints.values.md}px)`]: {
          fontSize: 16,
          lineHeight: 1.5,
        },
      },
      body2: {
        fontSize: 16,
        fontFamily: 'Open Sans',
        fontWeight: 400,
        lineHeight: 1.5,
        [`@media (max-width:${breakpoints.values.lg}px)`]: {
          fontSize: 16,
        },
        [`@media (max-width:${breakpoints.values.md}px)`]: {
          fontSize: 14,
          lineHeight: 1.5,
        },
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
        [`@media (max-width:${breakpoints.values.lg}px)`]: {
          fontSize: 12,
        },
        [`@media (max-width:${breakpoints.values.md}px)`]: {
          fontSize: 10,
          lineHeight: 1.5,
        },
      },
      table1: {
        fontSize: 14,
        fontFamily: 'Open Sans',
        fontWeight: 600,
        lineHeight: 1.5,
      },
      table2: {
        fontSize: 14,
        fontFamily: 'Open Sans',
        fontWeight: 400,
        lineHeight: 1.5,
      },
      overline: {
        fontSize: 12,
        fontFamily: 'Open Sans',
        fontWeight: 600,
        lineHeight: 1.3,
        [`@media (max-width:${breakpoints.values.md}px)`]: {
          fontSize: 10,
          lineHeight: 1.3,
        },
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
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(${OpenSansBold}) format('truetype');
        }
      `,
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            // todo styles for dark mode
            backgroundColor: mode === 'light' ? '#FCFCFC' : '#000000',
            boxShadow: '0px 4px 37px rgba(0, 0, 0, 0.08)',
            marginTop: '8px !important',
            padding: '8px 17px',
          },
          arrow: {
            // todo style arrow like in figma
            '&:before': {
              borderRadius: '2px',
            },
            color: mode === 'light' ? '#FCFCFC' : '#000000',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          disabled: {},
          sizeSmall: {
            borderRadius: '4px',
            padding: '4px 16px',
            minWidth: '88px',
            height: '32px',

            // button
            fontSize: 16,
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
