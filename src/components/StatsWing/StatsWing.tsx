import React, { ReactComponentElement } from 'react';

import { styled } from '@mui/material/styles';

import Typography from 'components/Typography/Typography';

export type StatsWingProps = {
  leftTextTitle: string;
  leftTextValue: string;
  leftTextCurrencty: string;
  rightTextTitle: string;
  rightTextValue: string;
  rightTextCurrencty: string;
  loading: boolean;
  connected?: boolean;
};

type TextBlockType = {
  title: string;
  value: string;
  currency: string;
  loading: boolean;
  connected?: boolean;
};

const Body = styled('div')<{ connected?: boolean }>(({ theme, connected }) => ({
  padding: '32px 80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxHeight: 131,
  background: !connected
    ? theme.palette.secondary.dark
    : theme.palette.custom.contrastText,
  boxShadow: '0px 10px 40px rgba(6, 25, 83, 0.08)',
  borderRadius: '12px',
}));

const CircleWrapper = styled('div')(() => ({
  width: 160,
  height: 160,
  background: '#FCFCFC',
  boxShadow: '0px 4px 37px rgba(0, 0, 0, 0.08)',
  borderRadius: '80px',
  position: 'relative',
  zIndex: 1,

  '&:before': {
    position: 'absolute',
    top: -4,
    right: -4,
    bottom: -4,
    left: -4,
    zIndex: -1,
    background: 'linear-gradient(to bottom, #0C2D9C, #6F9BE1)',
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
}));

const TextBlockWrapper = styled('div')(() => ({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ValueWrapper = styled('div')(() => ({
  display: 'flex',
  marginTop: 4,
}));

const Title = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  textTransform: 'capitalize',
  color: theme.palette.action.disabled,
}));

const Value = styled(Typography)<{ connected?: boolean }>(
  ({ theme, connected }) => ({
    color: connected
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  })
);

const Currency = styled(Typography)<{ connected?: boolean }>(
  ({ theme, connected }) => ({
    color: connected
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
    opacity: 0.5,
  })
);

export const Shimmer = styled('div')<{
  width: number;
  height: number;
  dark?: boolean;
}>((props) => ({
  width: props.width,
  height: props.height,
  background: props.dark
    ? props.theme.palette.action.active
    : props.theme.palette.action.disabledBackground,
  borderRadius: '4px',
  marginTop: '4px',
}));

export const TextBlock = (props: TextBlockType) => {
  return (
    <TextBlockWrapper>
      <Title text={props.title} variant='subtitle1' />

      {props.loading ? (
        <Shimmer width={257} height={47} dark={!props.connected} />
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

export const MiddleCircle = () => {
  return (
    <CircleWrapper>
      <p>4.68%</p>
    </CircleWrapper>
  );
};

export const StatsWing = (
  props: StatsWingProps
): ReactComponentElement<'div'> => {
  return (
    <Body connected={props.connected}>
      <TextBlock
        currency={props.leftTextCurrencty}
        title={props.leftTextTitle}
        value={props.leftTextValue}
        loading={props.loading}
        connected={props.connected}
      />
      <MiddleCircle />
      <TextBlock
        currency={props.rightTextCurrencty}
        title={props.rightTextTitle}
        value={props.rightTextValue}
        loading={props.loading}
        connected={props.connected}
      />
    </Body>
  );
};