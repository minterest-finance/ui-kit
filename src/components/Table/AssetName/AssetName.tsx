import React, { FC } from 'react';

import { Tooltip, TooltipProps, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  BTCIcon,
  MetaMaskSmallIcon,
  AssetIconBlank,
  AssetNameLoading,
  WETHIcon,
  DAIIcon,
  USDCIcon,
  USDTIcon,
  LedgerSmallIcon,
  TrezorSmallIcon,
  WalletConnectSmallIcon,
} from 'assets/svg';

import {
  lightTooltipStyles,
  tooltipTitleStyles,
  underlyingWrapperStyles,
  amountWrapperStyles,
  containerStyles,
  assetNameLoadingStyles,
  assetNameWrapperStyles,
  dataContainerStyles,
} from './AssetNameStyles';
import { Typography } from 'components';

type Props = {
  isLoading: boolean;
  isHovered: boolean;
  assetName: 'BTC' | 'WETH' | 'DAI' | 'USDC' | 'USDT';
  wallet: 'Metamask' | 'Trezor' | 'Ledger' | 'WalletConnect';
  balance: string;
};

const Icons = {
  BTC: BTCIcon,
  WETH: WETHIcon,
  DAI: DAIIcon,
  USDC: USDCIcon,
  USDT: USDTIcon,
};

const Wallets = {
  Metamask: MetaMaskSmallIcon,
  Trezor: TrezorSmallIcon,
  Ledger: LedgerSmallIcon,
  WalletConnect: WalletConnectSmallIcon,
};

const Container = styled('div')(containerStyles);
const DataContainer = styled('div')(dataContainerStyles);
const AmountWrapper = styled('div')(amountWrapperStyles);
const AssetNameLoadingComponent = styled(({ ...props }) => (
  <AssetNameLoading {...props} />
))(assetNameLoadingStyles);
const AssetNameWrapper = styled('div')(assetNameWrapperStyles);

const UnderlyingWrapper = styled(({ ...props }: any) => (
  <LightTooltip title={<TooltipTitle assetName={props.assetName} />} arrow>
    <div {...props}>
      {props.children}
      <AmountWrapper>
        <Typography variant={'subtitle1'} text={props.balance} />
      </AmountWrapper>
    </div>
  </LightTooltip>
))(underlyingWrapperStyles);

export const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
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
)(tooltipTitleStyles);

const AssetName: FC<Props> = ({
  isLoading,
  isHovered,
  assetName,
  wallet,
  balance,
}: Props) => {
  const Icon = Icons[assetName];
  const Wallet = Wallets[wallet];
  return (
    <Container>
      {!isLoading && (
        <>
          <Icon />
          <DataContainer
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: isHovered ? 'space-between' : 'center',
            }}
          >
            <AssetNameWrapper>{assetName}</AssetNameWrapper>
            {isHovered && (
              <UnderlyingWrapper assetName={assetName} balance={balance}>
                <Wallet />
              </UnderlyingWrapper>
            )}
          </DataContainer>
        </>
      )}
      {isLoading && (
        <>
          <AssetIconBlank />
          <AssetNameLoadingComponent />
        </>
      )}
    </Container>
  );
};

export default AssetName;
