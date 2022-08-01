import React from 'react';

import { ButtonBase } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { Typography } from 'components';

export const NavlinkButton = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }: { active?: boolean }) => ({
  '&:hover': {
    // todo move color in palette
    backgroundColor: '#F0F1F2',
  },
  '&:disabled': {
    opacity: 0.3,
  },
  // todo move color in palette
  borderBottom: active ? '2px solid #00C7CF' : 'none',
}));

export const NavlinkText = styled(Typography)(({ theme }) => ({
  maxHeight: 56,
  [theme.breakpoints.down('md')]: {
    maxHeight: 53,
  },
  padding: '16px 24px',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

export type NavlinkT = {
  name: string;
  route: string;
  onClick: (route: string) => void;
  disabled?: boolean;
  active?: boolean;
};

const Navlink: React.FC<NavlinkT> = ({
  name,
  route,
  onClick,
  disabled,
  active,
}) => {
  const onClickHandler = () => {
    if (!disabled) {
      onClick(route);
    }
  };
  const theme = useTheme();
  return (
    <NavlinkButton active={active} disabled={disabled} onClick={onClickHandler}>
      <NavlinkText
        sx={{
          color: active
            ? theme.palette.secondary.main
            : theme.palette.action.disabled,
        }}
        variant={active ? 'button' : 'body2'}
        text={name}
      />
    </NavlinkButton>
  );
};

export default Navlink;
