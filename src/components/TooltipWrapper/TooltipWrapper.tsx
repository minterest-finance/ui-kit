import React from 'react';

import { ButtonBase, Tooltip, TooltipProps, useTheme } from '@mui/material';

import { TooltipQuestion } from 'assets/svg';
import { SVGIcon } from 'types';

import Typography from '../Typography/Typography';

interface Props extends TooltipProps {
  icon?: SVGIcon;
  withoutIcon?: boolean;
}
const TooltipWrapper: React.FC<Props> = ({
  icon,
  withoutIcon,
  title,
  children,
  ...rest
}) => {
  const theme = useTheme();

  const Icon = icon ?? TooltipQuestion;

  return (
    <Tooltip
      placement='top'
      arrow
      {...rest}
      title={
        typeof title === 'string' ? (
          <Typography
            sx={{
              textAlign: 'center',
              color: theme.palette.action.disabled,
            }}
            variant={'subtitle2'}
            text={title}
          />
        ) : (
          title
        )
      }
    >
      <ButtonBase disableTouchRipple>
        {children}
        {!withoutIcon ? (
          <Icon style={{ marginLeft: children ? '5px' : 0 }} />
        ) : null}
      </ButtonBase>
    </Tooltip>
  );
};

export default TooltipWrapper;
