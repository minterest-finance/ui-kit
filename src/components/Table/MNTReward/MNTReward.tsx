import React, { FC } from 'react';

import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Tooltip, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MinterestSmallicon } from 'assets/svg';

import { Typography } from 'components';

type Props = {
  value: string;
  tooltipText: string;
};

const Wrapper = styled('div')({
  width: 67,
});

const AmountWrapper = styled('div')(() => ({
  display: 'flex',
  color: '#6D7692',
}));

const LogoWrapper = styled('div')({
  width: 12,
  height: 12,
});

const CustomButton = styled(ButtonUnstyled)({
  width: '100%',
  height: 20,
  borderRadius: 4,
  border: '1px solid rgba(12, 45, 156, 0.08)',
  backgroundColor: '#FCFCFC',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 3,
  paddingRight: 0,
  '&:hover': {
    backgroundColor: '#F0F1F2',
    cursor: 'pointer',
    '& .rewardValue': {
      color: '#061953',
    },
  },
});

const TooltipTitle = styled(Typography)({
  color: '#6D7692',
  textAlign: 'center',
});

const NumberPart = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ open }) => ({
  marginLeft: 4,
  color: open ? '#061953' : '#6D7692',
}));

const PercentSign = styled(Typography)({
  marginLeft: 2,
  color: '#6D7692',
});

const MNTReward: FC<Props> = ({ value, tooltipText }) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
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
                  text={`+${value}`}
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
