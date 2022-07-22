import React, { ReactComponentElement } from 'react';

import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentLoader from 'react-content-loader';
import { getTheme } from 'theme';

import Typography from 'components/Typography/Typography';

export type StatsWingProps = {
  leftTextTitle: string;
  leftTextValue: string;
  leftTextCurrencty: string;
  rightTextTitle: string;
  rightTextValue: string;
  rightTextCurrencty: string;
  leftTextNotConnected: string;
  rightTextNotConnected: string;
  loading: boolean;
  netApy: string;
  connectClick: () => void;
  connected: boolean;
};

type TextBlockType = {
  title: string;
  value: string;
  currency: string;
  loading: boolean;
  extraTitle: string;
  connected?: boolean;
};

type MiddleCircleType = {
  connected: boolean;
  netApy: string;
  connectClick: () => void;
  loading: boolean;
};

const Body = styled('div')<{ connected?: string }>(({ theme, connected }) => ({
  padding: '32px 80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxHeight: 131,
  background:
    connected !== 'true'
      ? theme.palette.secondary.dark
      : theme.palette.custom.contrastText,
  boxShadow: '0px 10px 40px rgba(6, 25, 83, 0.08)',
  borderRadius: '12px',

  [theme.breakpoints.down('lg')]: {
    padding: '31px 24px',
    maxHeight: 108,
  },

  [theme.breakpoints.down('md')]: {
    padding: '0 42px 0 80px',
    maxHeight: 116,
    maxWidth: 259,
    margin: ' 0 auto',
    position: 'relative',
  },
}));

const CircleWrapper = styled('div')<{ connected?: string }>(
  ({ theme, connected }) => ({
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
      background:
        connected === 'true'
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
  })
);

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

const ValueWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  marginTop: 4,

  [theme.breakpoints.down('md')]: {
    marginTop: 1,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'capitalize',
  color: theme.palette.action.disabled,

  [theme.breakpoints.down('lg')]: {
    fontWeight: 400,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 10,
  },
}));

const ConnectWalletText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  maxWidth: 64,
  textAlign: 'center',
  cursor: 'pointer',
}));

const Value = styled(Typography)<{ connected?: string }>(
  ({ theme, connected }) => ({
    color:
      connected === 'true'
        ? theme.palette.primary.main
        : theme.palette.secondary.main,

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  })
);

const Currency = styled(Typography)<{ connected?: string }>(
  ({ theme, connected }) => ({
    color:
      connected === 'true'
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
    opacity: 0.5,

    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  })
);

const PercentSymbol = styled(Currency)(({ theme }) => ({
  color: theme.palette.action.disabled,
}));

const MiddleTextBlock = styled('div')();

const MobileTextBlockWrapper = styled('div')();

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
          width={mobile ? 137 : tablet ? 173 : 257}
          backgroundColor={theme.palette.action.disabledBackground}
        >
          <rect
            x={0}
            y={mobile ? 1 : 4}
            rx={4}
            ry={4}
            width={mobile ? 137 : tablet ? 173 : 257}
            height={mobile ? 24 : tablet ? 26 : 47}
          />
        </ContentLoader>
      ) : (
        <ValueWrapper>
          <Currency
            text={props.currency}
            variant='h2'
            connected={String(props.connected)}
          />
          <Value
            text={props.value}
            variant='h2'
            connected={String(props.connected)}
          />
        </ValueWrapper>
      )}
    </TextBlockWrapper>
  );
};

export const MiddleCircle = (props: MiddleCircleType): JSX.Element => {
  const theme = getTheme('light');

  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <CircleWrapper connected={String(props.connected)}>
      {props.connected ? (
        <MiddleTextBlock>
          <Title text={'Net APY'} variant='subtitle1' />
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
                connected={String(props.connected)}
              />
              <PercentSymbol
                text={'%'}
                variant='h2'
                connected={String(props.connected)}
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

export const StatsWing = (
  props: StatsWingProps
): ReactComponentElement<'div'> => {
  const theme = getTheme('light');
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  if (mobile) {
    return (
      <Body connected={String(props.connected)}>
        <MiddleCircle
          connected={props.connected}
          netApy={props.netApy}
          connectClick={props.connectClick}
          loading={props.loading}
        />

        <MobileTextBlockWrapper>
          <TextBlock
            currency={props.leftTextCurrencty}
            title={props.leftTextTitle}
            value={props.leftTextValue}
            loading={props.loading}
            connected={props.connected}
            extraTitle={props.leftTextNotConnected}
          />

          <TextBlock
            currency={props.rightTextCurrencty}
            title={props.rightTextTitle}
            value={props.rightTextValue}
            loading={props.loading}
            connected={props.connected}
            extraTitle={props.rightTextNotConnected}
          />
        </MobileTextBlockWrapper>
      </Body>
    );
  }

  return (
    <Body connected={String(props.connected)}>
      <TextBlock
        currency={props.leftTextCurrencty}
        title={props.leftTextTitle}
        value={props.leftTextValue}
        loading={props.loading}
        connected={props.connected}
        extraTitle={props.leftTextNotConnected}
      />
      <MiddleCircle
        connected={props.connected}
        netApy={props.netApy}
        connectClick={props.connectClick}
        loading={props.loading}
      />
      <TextBlock
        currency={props.rightTextCurrencty}
        title={props.rightTextTitle}
        value={props.rightTextValue}
        loading={props.loading}
        connected={props.connected}
        extraTitle={props.rightTextNotConnected}
      />
    </Body>
  );
};
