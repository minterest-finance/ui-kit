import React, { FC } from 'react';

import { styled } from '@mui/material/styles';
import ContentLoader from 'react-content-loader';

import { Typography, MNTReward } from 'components';
import { MNTRewardProps } from 'components/Table/MNTReward/MNTReward';

type PercentageInfoProps = {
  percentageValue: string;
  loading: boolean;
  netApyOnly: boolean;
} & MNTRewardProps;

const GreyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.action.disabled,
}));

const Loader: React.FC = () => (
  <ContentLoader height={21} width={64}>
    <rect x={0} y={0} rx={4} ry={4} width={64} height={21} />
  </ContentLoader>
);

const Wrapper = styled('div')({
  width: 65,
  height: 41,
  lineHeight: 0,
  fontSize: 0,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

const NetApyOnlyWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 29,
  borderRadius: 4,
  backgroundColor: theme.palette.chartsBlue30.main,
}));

const BottowRowWrapper = styled('div')({
  paddingLeft: 1,
});

const TopRowWrapper = styled('div')({
  textAlign: 'right',
});

const PercentageInfo: FC<PercentageInfoProps> = ({
  percentageValue,
  loading,
  netApyOnly,
  mntRewardValue,
  tooltipText,
}: PercentageInfoProps) => {
  const percentageValueIsZero = !percentageValue || percentageValue === '0';

  if (loading)
    return (
      <Wrapper>
        <BottowRowWrapper>
          <Loader />
        </BottowRowWrapper>
      </Wrapper>
    );

  if (netApyOnly)
    return (
      <Wrapper>
        <BottowRowWrapper>
          <NetApyOnlyWrapper>
            <Typography variant={'table1'} text={percentageValue} />
            <GreyText variant={'table2'} text={'%'} />
          </NetApyOnlyWrapper>
        </BottowRowWrapper>
      </Wrapper>
    );

  return (
    <Wrapper>
      {!percentageValueIsZero && (
        <>
          <TopRowWrapper>
            <Typography variant={'table2'} text={percentageValue} />
            <GreyText variant={'table2'} text={'%'} />
          </TopRowWrapper>
          <BottowRowWrapper>
            <MNTReward
              mntRewardValue={mntRewardValue}
              tooltipText={tooltipText}
            />
          </BottowRowWrapper>
        </>
      )}
      {percentageValueIsZero && (
        <TopRowWrapper>
          <GreyText variant={'table1'} text={'0%'} />
        </TopRowWrapper>
      )}
    </Wrapper>
  );
};

export default PercentageInfo;
