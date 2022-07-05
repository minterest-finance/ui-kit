import React, { ReactComponentElement } from 'react';

import classes from './HeaderMessage.module.scss';
import { Typography } from 'components';
import { CloseButton } from 'components/Button/Button';

export type HeaderMessagePropsType = {
  title: string;
  firstLine: string;
  onClose: () => void;
  secondLine?: string | JSX.Element[];
};

export const HeaderMessageComponent = ({
  title,
  firstLine,
  onClose,
  secondLine,
}: HeaderMessagePropsType): ReactComponentElement<'div'> => {
  return (
    <div className={classes.body}>
      <div className={classes.message}>
        <div className={classes.textWrapper}>
          <Typography className={classes.title} text={title} variant='h3' />

          <div className={classes.description}>
            {firstLine}
            {secondLine && secondLine}
          </div>
        </div>
        <CloseButton onClick={onClose} />
      </div>
    </div>
  );
};
