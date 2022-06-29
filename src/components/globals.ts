// @ts-ignore
import OpenSansRegular from '../assets/fonts/OpenSans-Regular.ttf';
// @ts-ignore
import OpenSansSemiBold from '../assets/fonts/OpenSans-SemiBold.ttf';
// @ts-ignore
import UbuntuBold from '../assets/fonts/Ubuntu-Bold.ttf';

export const fonts = {
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
};

export const typography = {
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
  },
};
