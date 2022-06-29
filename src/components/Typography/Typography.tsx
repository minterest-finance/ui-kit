import React, { FC } from 'react';

import Typography, { TypographyProps } from '@mui/material/Typography';

type Props = {
  text: string;
} & TypographyProps;

const TypographyComponent: FC<Props> = ({ text, ...props }: Props) => {
  return <Typography {...props}>{text}</Typography>;
};

export default TypographyComponent;
