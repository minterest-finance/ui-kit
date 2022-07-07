import {
    tooltipClasses,
  } from '@mui/material';

export const underlyingWrapperStyles = ({ theme }) => ({
  display: 'flex',
  color: '#6D7692',

  '&:hover': {
    '& .MuiTypography-root': {
      color: '#061953',
    },
  },
});

export const lightTooltipStyles = ({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#FCFCFC',
    boxShadow: '0px 4px 37px rgba(0, 0, 0, 0.08)',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#FCFCFC',
  },
})