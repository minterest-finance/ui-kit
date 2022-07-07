import React, { Children, FC } from 'react';

import {
  Tooltip,
  TooltipProps,
  tooltipClasses,
  TypographyProps,
  typographyClasses,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BTCIcon, MetamaskIcon } from 'assets/svg';

import { lightTooltipStyles, underlyingWrapperStyles } from './AssetNameStyles';
import { Typography } from 'components';

type Props = {
  variant: string;
  isHovered: boolean;
  assetName: string;
};

const UnderlyingWrapper = styled(({ ...props }: any) => (
  <LightTooltip title={<TooltipTitle assetName={'ASSET'} />} arrow>
  <div {...props}>
    {props.children}
    <AmountWrapper>
      <Typography variant={'subtitle1'} text='123' />
    </AmountWrapper>
  </div>
  </LightTooltip>
))(underlyingWrapperStyles);

const AmountWrapper = styled('div')(
  ({ theme }) => `
        margin-left: 4px;
  `
);

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(lightTooltipStyles);

const TooltipTitle = styled(
  ({ ...props }: TypographyProps & { assetName: string }) => (
    <Typography
      variant={'subtitle2'}
      text={`Your current ${props.assetName} balance in your wallet`}
      {...props}
    />
  )
)(({ theme }) => ({
  [`&.${typographyClasses.subtitle2}`]: {
    color: '#6D7692',
    width: 128,
    textAlign: 'center',
  },
}));

const AssetName: FC<Props> = ({
  variant,
  isHovered = true,
  assetName = 'BTCC',
}: Props) => {
  if (variant === 'normal')
    return (
      <div
        style={{
          height: 39,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <BTCIcon />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: isHovered ? 'space-between' : 'center',
            height: 39,
            marginLeft: 8,
          }}
        >
          <div
            style={{
              fontFamily: 'Open Sans',
              fontWeight: 700,
              fontSize: 14,
              lineHeight: 1.5,
            }}
          >
            BTC
          </div>
          {isHovered && (
            // <LightTooltip title={<TooltipTitle assetName={assetName} />} arrow>

              <UnderlyingWrapper>
                  <MetamaskIcon />

              </UnderlyingWrapper>

          )}
        </div>
      </div>
    );
};

export default AssetName;
