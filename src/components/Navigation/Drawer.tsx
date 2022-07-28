import React, { FC } from 'react';

import {
  SwipeableDrawer,
  IconButton,
  Box,
  Divider,
  List,
  ListItem,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CloseIcon } from 'assets/svg';

import Navlink from './Navlink';
import { Typography } from 'components';

const DrawerStyled = styled('div')(({ theme }) => ({
  width: '360px',
  [theme.breakpoints.down('md')]: {
    width: '100vw',
  },
  '& .box': {
    width: '100%',
    paddingTop: '32px',
  },
}));

const DrawerItem = styled(ListItem)({
  justifyContent: 'center',
  marginBottom: '24px',
});

const TitleBlock = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '14px 25px',
});

const BottomButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export type LinkItem = {
  name: string;
  route: string;
  disabled?: boolean;
};

type Props = {
  title: string;
  links: LinkItem[];
  onLinkClick: (route: string) => void;
  onClose: () => void;
  BottomComponent?: FC;
  isOpen: boolean;
  activeRoute: string;
};

const DrawerMenu: FC<Props> = ({
  title,
  links,
  BottomComponent,
  onLinkClick,
  isOpen,
  onClose,
  activeRoute,
}: Props) => {
  return (
    // @ts-ignore
    <SwipeableDrawer
      hideBackdrop={true}
      anchor={'right'}
      open={isOpen}
      onOpen={() => undefined}
      onClose={onClose}
    >
      <DrawerStyled>
        <TitleBlock>
          <Typography text={title} variant='h2' />
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </TitleBlock>
        <Divider />
        <Box sx={{ width: 250 }} role='presentation' className={'box'}>
          <List>
            {links.map((link, index) => {
              const isActive = activeRoute === link.route;
              return (
                <DrawerItem key={index} disablePadding>
                  <Navlink
                    name={link.name}
                    route={link.route}
                    disabled={link.disabled}
                    active={isActive}
                    onClick={onLinkClick}
                  />
                </DrawerItem>
              );
            })}
          </List>
        </Box>
        <BottomButton>{BottomComponent && <BottomComponent />}</BottomButton>
      </DrawerStyled>
    </SwipeableDrawer>
  );
};

export default DrawerMenu;
