import React, { ReactComponentElement } from 'react';

import { styled } from '@mui/material/styles';

import { CloseButton } from 'components/Button/Button';
import Typography from 'components/Typography/Typography';

export type HeaderMessagePropsType = {
  title: string;
  firstLine: string;
  onClose: () => void;
  secondLine?: string | JSX.Element[];
};

const Body = styled('div')(
  ({ theme }) => `
width: 100%;
height: fit-content;
background: #f6f7f9;
display: flex;
align-items: center;
justify-content: center;
padding: 16px 120px 18px 94px;

${theme.breakpoints.down('md')}{
  padding: 16px 110px 18px 78px;
}

${theme.breakpoints.down('sm')}{
  padding: 8px 40px 8px 20px;
}

`
);

const Message = styled('div')(
  ({ theme }) => `
position: relative;
width: 1226px;
display: flex;
justify-content: space-between;
align-items: center;

${theme.breakpoints.down('md')}{
  max-width: 100%;
  flex-wrap: wrap;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
}

${theme.breakpoints.down('sm')}{
  flex-wrap: wrap;
}

`
);

const Title = styled(Typography)(
  () => `
  color: #061953;
`
);

const TextWrapper = styled('div')(
  () => `
max-width: 729px;
`
);

const Description = styled('div')(
  ({ theme }) => `
margin-top: 8px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: ${theme.palette.action.disabled};
`
);

export const HeaderMessageComponent = ({
  title,
  firstLine,
  onClose,
  secondLine,
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
        <CloseButton onClick={onClose} />
      </Message>
    </Body>
  );
};
