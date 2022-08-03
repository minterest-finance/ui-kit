import React, { FC } from 'react';

import { styled } from '@mui/material/styles';

import { SortArrowUpLight, SortArrowUpDark } from 'assets/svg';
import { Typography } from 'components';

type Props = {
  label: string;
  sorted: boolean;
  sortOrder: string;
};

const Label = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'sorted',
})<{ sorted?: boolean }>(({ sorted, theme }) => ({
  color: sorted ? theme.palette.secondary.main : theme.palette.action.disabled,
}));

const Wrapper = styled('div')({
  display: 'flex',
});

const Arrows = styled('div', {
  shouldForwardProp: (prop) => prop !== 'sortOrder',
})<{ sortOrder?: string }>(({ sortOrder }) => ({
  marginLeft: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  transform: sortOrder === 'asc' ? 'rotate(180deg)' : '',
}));

const ArrowDownDark = styled(SortArrowUpDark)({
  transform: 'rotate(180deg)',
});

const ArrowDownLight = styled(SortArrowUpLight)({
  transform: 'rotate(180deg)',
});

const NumericInfo: FC<Props> = ({ label, sorted, sortOrder }: Props) => {
  return (
    <Wrapper>
      <Label variant={'subtitle1'} text={label} sorted={sorted} />

      {sorted && (
        <Arrows sortOrder={sortOrder}>
          <SortArrowUpLight />
          <ArrowDownDark />
        </Arrows>
      )}

      {!sorted && (
        <Arrows>
          <SortArrowUpLight />
          <ArrowDownLight />
        </Arrows>
      )}
    </Wrapper>
  );
};

export default NumericInfo;
