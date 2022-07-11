import React, { FC } from 'react';

import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import {
  Tooltip,
  TooltipProps,
  TypographyProps,
  ClickAwayListener,
} from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { MinterestSmallicon } from 'assets/svg';

import {
  tooltipTitleStyles,
  amountStyles,
  amountWrapperStyles,
  numberPartStyles,
  percentSignStyles,
  lightTooltipStyles,
} from './MNTRewardStyles';
import { Typography } from 'components';

export const LightTooltip = styled(
  ({
    className,
    ...props
  }: TooltipProps & {
    open: boolean;
  }) => {
    return (
      <Tooltip
        {...props}
        classes={{ popper: className }}
        onClose={props.onClose}
        open={props.open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      />
    );
  }
)(lightTooltipStyles);

const TooltipTitle = styled(({ ...props }: TypographyProps) => (
  <Typography variant={'subtitle2'} text={'Example Text'} {...props} />
))(tooltipTitleStyles);

const AmountWrapper = styled('div')(amountWrapperStyles);
const NumberPart = styled(
  ({ ...props }: TypographyProps & { mntrewardsamount: string }) => (
    <Typography
      variant={'subtitle2'}
      text={`+${props.mntrewardsamount}`}
      {...props}
    />
  )
)(numberPartStyles);

const PercentSign = styled(
  ({ ...props }: TypographyProps & { mntrewardsamount: string }) => (
    <Typography variant={'subtitle2'} text={`%`} {...props} />
  )
)(percentSignStyles);

const Amount = styled(
  ({ ...props }: TypographyProps & { mntrewardsamount: string }) => (
    <AmountWrapper>
      <NumberPart {...props} />
      <PercentSign {...props} />
    </AmountWrapper>
  )
)(amountStyles);

const MNTReward = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    console.log('CLOSING');
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    console.log('HANDLE OPEN');
    setOpen(true);
  };
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <LightTooltip
          title={<TooltipTitle />}
          onClose={handleTooltipClose}
          open={open}
          arrow
          >
          <ButtonUnstyled
            style={{
              width: 67,
              height: 20,
              borderRadius: 4,
              backgroundColor: '#f0f1f2',
              border: '1px solid rgba(12, 45, 156, 0.08)',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 4,
            }}
            onClick={handleTooltipOpen}
          >
            <MinterestSmallicon />
            <Amount mntrewardsamount='0.45' />
          </ButtonUnstyled>
        </LightTooltip>
      </div>
    </ClickAwayListener>
  );
};

export default MNTReward;
