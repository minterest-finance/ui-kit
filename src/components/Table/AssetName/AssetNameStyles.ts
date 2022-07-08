import {
  tooltipClasses,
  typographyClasses,
  CSSObject,
  Theme,
} from '@mui/material';

export const underlyingWrapperStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSObject => ({
  display: 'flex',
  '& .MuiTypography-root': {
    color: '#6D7692',
  },

  '&:hover': {
    cursor: 'pointer',
    '& .MuiTypography-root': {
      color: theme.palette.secondary.main,
    },
  },
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

export const tooltipTitleStyles = (): CSSObject => ({
  [`&.${typographyClasses.subtitle2}`]: {
    color: '#6D7692',
    width: 128,
    textAlign: 'center',
  },
});

export const amountWrapperStyles = (): CSSObject => ({
  marginLeft: 4,
});

export const containerStyles = (): CSSObject => ({
  height: 39,
  display: 'flex',
  alignItems: 'center',
});

export const dataContainerStyles = (): CSSObject => ({
  height: 39,
  marginLeft: 8,
});

export const assetNameLoadingStyles = (): CSSObject => ({
  marginLeft: 8,
});

export const assetNameWrapperStyles = ({
  theme,
}: {
  theme: Theme;
}): CSSObject => ({
  fontFamily: 'Open Sans',
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 1.5,
  color: theme.palette.secondary.main,
});
