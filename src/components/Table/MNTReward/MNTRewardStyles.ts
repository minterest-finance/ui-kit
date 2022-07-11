import {
  tooltipClasses,
  typographyClasses,
  CSSObject,
  Theme,
} from '@mui/material';

export const tooltipTitleStyles = (): CSSObject => ({
  [`&.${typographyClasses.subtitle2}`]: {
    color: '#6D7692',
    textAlign: 'center',
  },
});

export const amountStyles = () => ({
  color: '#6D7692',
});

export const lightTooltipStyles = (): CSSObject => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#FCFCFC',
    boxShadow: '0px 4px 37px rgba(0, 0, 0, 0.08)',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#FCFCFC',
  },
});

export const amountWrapperStyles = () => ({
  display: 'flex',
});
export const numberPartStyles = () => ({
  marginLeft: 4,
});
export const percentSignStyles = () => ({
  marginLeft: 2,
});
