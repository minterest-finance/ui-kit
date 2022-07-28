import { ButtonBase, styled } from '@mui/material';

const CircleButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'connected',
})<{ connected?: boolean }>(({ theme, connected }) => ({
  width: 160,
  height: 160,
  background: '#FCFCFC',
  boxShadow: '0px 4px 37px rgba(0, 0, 0, 0.08)',
  borderRadius: '50%',
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '29px',
  paddingRight: '29px',

  '&:before': {
    position: 'absolute',
    top: -4,
    right: -4,
    bottom: -4,
    left: -4,
    zIndex: -1,
    background: connected
      ? 'linear-gradient(to bottom, #0C2D9C, #6F9BE1)'
      : 'linear-gradient(to bottom, #6D7692, #06195333)',
    content: `''`,
    borderRadius: 'inherit',
    borderWidth: 4,
  },

  '&:after': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    background: '#FCFCFC',
    content: `''`,
    borderRadius: 'inherit',
  },

  [theme.breakpoints.down('lg')]: {
    width: 134,
    height: 134,
  },

  [theme.breakpoints.down('md')]: {
    width: 124,
    height: 124,
  },
}));

export default CircleButton;
