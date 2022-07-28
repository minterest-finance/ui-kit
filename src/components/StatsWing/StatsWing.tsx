import React, { ReactComponentElement } from 'react';

import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getTheme } from 'theme';

import { StatsWingCircle } from './StatsWingCircle';
import { TextBlock } from './StatsWingTextBlock';

export type StatsWingProps = {
  leftTextTitle: string;
  leftTextValue: string;
  leftTextCurrency: string;
  rightTextTitle: string;
  rightTextValue: string;
  rightTextCurrency: string;
  leftTextNotConnected: string;
  rightTextNotConnected: string;
  loading: boolean;
  netApy: string;
  connectClick: () => void;
  connected: boolean;
  titleForMiddleCircle: string;
  tooltipText?: string;
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

const MobileTextBlockWrapper = styled('div')();

export const StatsWing = (
  props: StatsWingProps
): ReactComponentElement<'div'> => {
  const theme = getTheme('light');
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  if (mobile) {
    return (
      <Body connected={String(props.connected)}>
        <StatsWingCircle
          connected={props.connected}
          netApy={props.netApy}
          connectClick={props.connectClick}
          loading={props.loading}
          title={props.titleForMiddleCircle}
          tooltipText={props.tooltipText}
        />

        <MobileTextBlockWrapper>
          <TextBlock
            currency={props.leftTextCurrency}
            title={props.leftTextTitle}
            value={props.leftTextValue}
            loading={props.loading}
            connected={props.connected}
            extraTitle={props.leftTextNotConnected}
          />

          <TextBlock
            currency={props.rightTextCurrency}
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
        currency={props.leftTextCurrency}
        title={props.leftTextTitle}
        value={props.leftTextValue}
        loading={props.loading}
        connected={props.connected}
        extraTitle={props.leftTextNotConnected}
      />
      <StatsWingCircle
        connected={props.connected}
        netApy={props.netApy}
        connectClick={props.connectClick}
        loading={props.loading}
        title={props.titleForMiddleCircle}
        tooltipText={props.tooltipText}
      />
      <TextBlock
        currency={props.rightTextCurrency}
        title={props.rightTextTitle}
        value={props.rightTextValue}
        loading={props.loading}
        connected={props.connected}
        extraTitle={props.rightTextNotConnected}
      />
    </Body>
  );
};
