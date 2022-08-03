import React from 'react';

import { TypographyProps, useMediaQuery, useTheme } from '@mui/material';
import ContentLoader from 'react-content-loader';

import Typography from './Typography';
import { LoadableComponent } from 'types';

import { Row } from '../Common';

interface Props extends LoadableComponent {
  value: string;
  variant?: 'default' | 'connected';
  symbol?: string;
  currencyProps?: TypographyProps;
  valueProps?: TypographyProps;
  prefix?: boolean;
  postfix?: boolean;
}

const PrefixedValue: React.FC<Props> = ({
  value,
  symbol = '$',
  variant = 'default',
  isLoading,
  currencyProps = {},
  valueProps = {},
  contentLoaderProps = {},
  rect = {},
  prefix = true,
  postfix,
}) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const textVariant = isTablet || isMobile ? 'h3' : 'h2';

  const Colors = {
    default: theme.palette.secondary.main,
    connected: theme.palette.primary.main,
  };

  if (isLoading) {
    return (
      <ContentLoader
        height={isMobile ? 24 : isTablet ? 26 : 47}
        width={isMobile ? 125 : isTablet ? 173 : 257}
        backgroundColor={theme.palette.action.disabledBackground}
        {...contentLoaderProps}
      >
        <rect
          x={0}
          rx={4}
          ry={4}
          width={isMobile ? 125 : isTablet ? 173 : 257}
          height={isMobile ? 24 : isTablet ? 26 : 47}
          {...rect}
        />
      </ContentLoader>
    );
  }

  const Symbol = () => (
    <Typography
      sx={{
        color: Colors[variant],
        opacity: 0.5,
      }}
      text={symbol}
      variant={textVariant}
      {...currencyProps}
    />
  );

  return (
    <Row>
      {prefix && <Symbol />}
      <Typography
        sx={{
          color: Colors[variant],
        }}
        text={value}
        variant={textVariant}
        {...valueProps}
      />
      {postfix && <Symbol />}
    </Row>
  );
};

export default PrefixedValue;
