import React from 'react';

import { styled, useMediaQuery } from '@mui/material';
import ContentLoader from 'react-content-loader';
import { getTheme } from 'theme';

import { Currency, Title, Value, ValueWrapper } from './StatsWingTextBlock';
import Typography from 'components/Typography/Typography';

type StatsWingCircleType = {
  connected: boolean;
  netApy: string;
  connectClick: () => void;
  loading: boolean;
  title: string;
};

const CircleWrapper = styled('div', {
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
  justifyContent: 'center',
  alignItems: 'center',

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
    position: 'absolute',
    width: 124,
    height: 124,
    left: '-62px',
  },
}));

const PercentSymbol = styled(Currency)(({ theme }) => ({
  color: theme.palette.action.disabled,

  [theme.breakpoints.down('lg')]: {
    fontSize: 20,
    lineHeight: '26px',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
  },
}));

const MiddleTextBlock = styled('div')();

const ConnectWalletText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  maxWidth: 64,
  textAlign: 'center',
  cursor: 'pointer',

  [theme.breakpoints.down('lg')]: {
    fontSize: 20,
    lineHeight: '26px',
    fontWeight: 700,
    maxWidth: 80,
  },

  [theme.breakpoints.down('md')]: {
    fontSize: 16,
    lineHeight: '24px',
    maxWidth: 64,
  },
}));

export const StatsWingCircle = (props: StatsWingCircleType): JSX.Element => {
  const theme = getTheme('light');

  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <CircleWrapper connected={props.connected}>
      {props.connected ? (
        <MiddleTextBlock>
          <Title text={props.title} variant='subtitle1' />
          {props.loading ? (
            <ContentLoader
              height={mobile ? 24 : tablet ? 26 : 47}
              width={mobile ? 56 : tablet ? 57 : 102}
              color='#000'
            >
              <rect
                x={0}
                y={mobile ? 1 : 4}
                rx={4}
                ry={4}
                width={102}
                height={47}
              />
            </ContentLoader>
          ) : (
            <ValueWrapper>
              <Value
                text={props.netApy}
                variant='h2'
                connected={props.connected}
                mobileFontWeight={400}
              />
              <PercentSymbol
                text={'%'}
                variant='h2'
                connected={props.connected}
              />
            </ValueWrapper>
          )}
        </MiddleTextBlock>
      ) : (
        <ConnectWalletText
          onClick={props.connectClick}
          text='Connect wallet'
          variant='h4'
        />
      )}
    </CircleWrapper>
  );
};
