import React, { FC } from 'react';

import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Tooltip, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';

import { MinterestSmallicon } from 'assets/svg';
import { Typography } from 'components';

export type MNTRewardProps = {
  mntRewardValue: string;
  tooltipText: string;
};

const Wrapper = styled('div')({
  width: 67,
});

const AmountWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.action.disabled,
}));

const LogoWrapper = styled('div')({
  width: 12,
  height: 12,
});

const CustomButton = styled(ButtonUnstyled)(({ theme }) => ({
  width: '100%',
  height: 20,
  borderRadius: 4,
  border: '1px solid rgba(12, 45, 156, 0.08)',
  backgroundColor: theme.palette.grey99.main,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 3,
  paddingRight: 0,
  '&:hover': {
    backgroundColor: theme.palette.action.disabledBackground,
    cursor: 'pointer',
    '& .rewardValue': {
      color: theme.palette.secondary.main,
    },
  },
}));

export const TooltipTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.action.disabled,
  textAlign: 'center',
}));

const NumberPart = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open, theme }) => ({
  marginLeft: 4,
  color: open ? theme.palette.secondary.main : theme.palette.action.disabled,
}));

const PercentSign = styled(Typography)(({ theme }) => ({
  marginLeft: 2,
  color: theme.palette.action.disabled,
}));

const MNTReward: FC<MNTRewardProps> = ({ mntRewardValue, tooltipText }) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => setOpen(false);

  const handleTooltipOpen = () => setOpen(true);

  return (
    <Wrapper>
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <div>
          <Tooltip
            title={<TooltipTitle variant={'subtitle2'} text={tooltipText} />}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
          >
            <CustomButton onClick={handleTooltipOpen}>
              <LogoWrapper>
                <MinterestSmallicon />
              </LogoWrapper>
              <AmountWrapper>
                <NumberPart
                  variant={'subtitle2'}
                  text={`+${mntRewardValue}`}
                  className={'rewardValue'}
                  open={open}
                />
                <PercentSign variant={'subtitle2'} text={`%`} />
              </AmountWrapper>
            </CustomButton>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </Wrapper>
  );
};

export default MNTReward;
