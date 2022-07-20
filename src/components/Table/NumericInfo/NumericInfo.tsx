import React, { FC } from 'react';

import { styled } from '@mui/material/styles';
import ContentLoader from 'react-content-loader';

import { Typography } from 'components';

type Props = {
  usdValue: string;
  assetValue: string;
  isLoading: boolean;
};

const ElementWrapper = styled('div')({
  height: 41,
  display: 'flex',
  justifyContent: 'flex-end',
});

const DataWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const NoDataWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const GreyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.action.disabled,
  textAlign: 'right',
}));

const BlueText = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const UsdValueWrapper = styled('div')({
  textAlign: 'right',
  // todo DO BETTER
  lineHeight: 0,
});

const Loader: React.FC = () => (
  <ContentLoader height={21} width={64}>
    <rect x={0} y={0} rx={4} ry={4} width={64} height={21} />
  </ContentLoader>
);

const NumericInfo: FC<Props> = ({ usdValue, assetValue, isLoading }: Props) => {
  if (isLoading)
    return (
      <ElementWrapper>
        <NoDataWrapper>
          <Loader />
        </NoDataWrapper>
      </ElementWrapper>
    );

  const bothValuesAreZero =
    (!usdValue || usdValue === '0') && (!assetValue || assetValue === '0');
  return (
    <ElementWrapper>
      {!bothValuesAreZero && (
        <DataWrapper>
          <UsdValueWrapper>
            <GreyText variant={'table2'} text={'$'} />
            <BlueText variant={'table2'} text={usdValue} />
          </UsdValueWrapper>
          <>
            <GreyText variant={'subtitle2'} text={assetValue} />
          </>
        </DataWrapper>
      )}

      {bothValuesAreZero && (
        <NoDataWrapper>
          <GreyText variant={'table1'} text={'—'} />
        </NoDataWrapper>
      )}
    </ElementWrapper>
  );
};

export default NumericInfo;
