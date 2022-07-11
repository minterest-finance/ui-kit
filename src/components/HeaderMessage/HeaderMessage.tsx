import React, { ReactComponentElement } from 'react';

import { styled } from '@mui/material/styles';

import { CloseButton } from 'components/Button/Button';
import Typography from 'components/Typography/Typography';

export type HeaderMessagePropsType = {
  buttonTitle: string;
  title: string;
  firstLine: string;
  onClose: () => void;
  secondLine?: string | JSX.Element[];
};

const Body = styled('div')(({ theme }) => ({
  width: '100%',
  height: 'fit-content',
  background: theme.palette.custom.light,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 120px 18px 94px',

  [theme.breakpoints.down('md')]: {
    padding: '16px 110px 18px 78px',
  },

  [theme.breakpoints.down('sm')]: {
    padding: '8px 40px 8px 20px',
  },
}));

const Message = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '1226px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    flexWrap: 'wrap',
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '18px',
  },

  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.dark,
}));

const TextWrapper = styled('div')(() => ({
  maxWidth: '729px',
}));

const Description = styled('div')(({ theme }) => ({
  marginTop: '8px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '150%',
  color: theme.palette.action.disabled,
}));

export const HeaderMessageComponent = ({
  title,
  firstLine,
  onClose,
  secondLine,
  buttonTitle,
}: HeaderMessagePropsType): ReactComponentElement<'div'> => {
  return (
    <Body>
      <Message>
        <TextWrapper>
          <Title text={title} variant='h3' />
          <Description>
            {firstLine}
            {secondLine && secondLine}
          </Description>
        </TextWrapper>
        <CloseButton onClick={onClose}>{buttonTitle}</CloseButton>
      </Message>
    </Body>
  );
};
