import React, { FC, SVGProps } from 'react';

import { Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ContentLoader from 'react-content-loader';

import { Typography } from 'components';

export type SVGIcon = FC<
  SVGProps<SVGSVGElement> & { title?: string | undefined }
>;

type Props = {
  isLoading: boolean;
  isHovered: boolean;
  title: string;
  Icon: SVGIcon;
  SubIcon?: SVGIcon;
  balance: string;
  tooltipText: string;
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
    '& .MuiTypography-root': {
      color: '#061953',
    },
  },
});

const TooltipTitle = styled(Typography)({
  color: '#6D7692',
  width: 128,
  textAlign: 'center',
});

const Loader: React.FC = () => (
  <ContentLoader height={32} width={104}>
    <circle cx={16} cy={16} r={16} />
    <rect x={40} y={5} rx={4} ry={4} width={64} height={21} />
  </ContentLoader>
);

const AssetName: FC<Props> = ({
  isLoading,
  isHovered,
  title,
  Icon,
  SubIcon,
  balance,
  tooltipText,
}: Props) => {
  return (
    <Container>
      {!isLoading && (
        <>
          <Icon />
          <DataContainer isHovered={isHovered}>
            <Title text={title} />
            {isHovered && (
              <Tooltip
                title={
                  <TooltipTitle variant={'subtitle2'} text={tooltipText} />
                }
                arrow
              >
                <UnderlyingWrapper>
                  {SubIcon && <SubIcon />}
                  <Amount variant={'subtitle1'} text={balance} />
                </UnderlyingWrapper>
              </Tooltip>
            )}
          </DataContainer>
        </>
      )}
      {isLoading && <Loader />}
    </Container>
  );
};

export default AssetName;
