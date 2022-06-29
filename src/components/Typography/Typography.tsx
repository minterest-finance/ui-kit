import React, { FC } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Typography, { TypographyProps } from '@mui/material/Typography';

type Props = {
  text: string;
} & TypographyProps;

const TypographyComponent: FC<Props> = ({ text, ...props }: Props) => {
  return (
    <>
      <CssBaseline />
      <Typography {...props}>{text}</Typography>
    </>
  );
};

export default TypographyComponent;
