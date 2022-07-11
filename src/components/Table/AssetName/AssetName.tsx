import React, { FC } from 'react';

import { Tooltip } from '@mui/material';
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

import { Typography } from 'components';

type Props = {
  isLoading: boolean;
  isHovered: boolean;
  assetName: 'BTC' | 'WETH' | 'DAI' | 'USDC' | 'USDT';
  wallet: 'Metamask' | 'Trezor' | 'Ledger' | 'WalletConnect';
  balance: string;
  tooltipText: string;
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

const Container = styled('div')({
  height: 39,
  display: 'flex',
  alignItems: 'center',
});

const DataContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isHovered',
})<{ isHovered?: boolean }>(({ isHovered }) => ({
  marginLeft: 8,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: isHovered ? 'space-between' : 'center',
}));

const Amount = styled(Typography)({
  marginLeft: 4,
  color: '#6D7692',
});

const AssetNameLoadingComponent = styled(({ ...props }) => (
  <AssetNameLoading {...props} />
))({ marginLeft: 8 });

const Title = styled(Typography)({
  fontFamily: 'Open Sans',
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 1.5,
});

const UnderlyingWrapper = styled('div')({
  display: 'flex',
  '&:hover': {
    cursor: 'pointer',
  },
});

const TooltipTitle = styled(Typography)({
  color: '#6D7692',
  width: 128,
  textAlign: 'center',
});

const AssetName: FC<Props> = ({
  isLoading,
  isHovered,
  assetName,
  wallet,
  balance,
  tooltipText,
}: Props) => {
  const Icon = Icons[assetName];
  const Wallet = Wallets[wallet];
  return (
    <Container>
      {!isLoading && (
        <>
          <Icon />
          <DataContainer isHovered={isHovered}>
            <Title text={assetName} />
            {isHovered && (
              <Tooltip
                title={
                  <TooltipTitle variant={'subtitle2'} text={tooltipText} />
                }
                arrow
              >
                <UnderlyingWrapper>
                  <Wallet />
                  <Amount variant={'subtitle1'} text={balance} />
                </UnderlyingWrapper>
              </Tooltip>
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
