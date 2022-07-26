import React from 'react';

import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import ContentLoader from 'react-content-loader';
import { getTheme } from 'theme';

import Typography from 'components/Typography/Typography';

type TextBlockType = {
  title: string;
  value: string;
  currency: string;
  loading: boolean;
  extraTitle: string;
  connected?: boolean;
};

const TextBlockWrapper = styled('div')(({ theme }) => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 306,

  [theme.breakpoints.down('lg')]: {
    width: 173,
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: 137,
    margin: '12px 0',
  },
}));

export const ValueWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: 4,

  [theme.breakpoints.down('md')]: {
    marginTop: 1,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'capitalize',
  color: theme.palette.action.disabled,

  [theme.breakpoints.down('lg')]: {
    fontWeight: 400,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 10,
    lineHeight: '15px',
  },
}));

export const Value = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'connected',
})<{ connected?: boolean; mobileFontWeight?: number }>(
  ({ theme, connected, mobileFontWeight }) => ({
    color: connected
      ? theme.palette.primary.main
      : theme.palette.secondary.main,

    [theme.breakpoints.down('lg')]: {
      fontSize: 20,
      lineHeight: '26px',
      fontWeight: mobileFontWeight || 'bold',
    },

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 700,
    },
  })
);

export const Currency = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'connected',
})<{ connected?: boolean }>(({ theme, connected }) => ({
  color: connected ? theme.palette.primary.main : theme.palette.secondary.main,
  opacity: 0.5,

  [theme.breakpoints.down('lg')]: {
    fontSize: 20,
    lineHeight: '26px',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
  },
}));

export const TextBlock = (props: TextBlockType): JSX.Element => {
  const theme = getTheme('light');
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <TextBlockWrapper>
      <Title
        text={props.connected ? props.title : props.extraTitle}
        variant='subtitle1'
      />

      {props.loading ? (
        <ContentLoader
          height={mobile ? 24 : tablet ? 26 : 47}
          width={mobile ? 125 : tablet ? 173 : 257}
          backgroundColor={theme.palette.action.disabledBackground}
        >
          <rect
            x={0}
            y={mobile ? 1 : 4}
            rx={4}
            ry={4}
            width={mobile ? 125 : tablet ? 173 : 257}
            height={mobile ? 24 : tablet ? 26 : 47}
          />
        </ContentLoader>
      ) : (
        <ValueWrapper>
          <Currency
            text={props.currency}
            variant='h2'
            connected={props.connected}
          />
          <Value text={props.value} variant='h2' connected={props.connected} />
        </ValueWrapper>
      )}
    </TextBlockWrapper>
  );
};
