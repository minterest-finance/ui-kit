import React, { FC } from 'react';

import {
  SwipeableDrawer,
  IconButton,
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { CloseIcon } from 'assets/svg';

import { Typography } from 'components';

const DrawerStyled = styled('div')(({ theme }) => ({
  width: '360px',
  [theme.breakpoints.down('md')]: {
    width: '100vw',
  },
  '& .box': {
    width: '100%',
  },
  '& .listItemButtonCustom': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px',
    '& .Mui-disabled':{
      color: "#6D7692",
      opacity: 0,
    }
  },
  '& .nameText': {
    padding: '15px',
  },
  '& .greenDivideLine': {
    height: '2px',
    width: '130px',
    backgroundColor: theme.palette.success.main,
  },
}));

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

export const SidebarMenuComponent: FC<Props> = ({
  title,
  links,
  BottomComponent,
  onLinkClick,
  isOpen,
  onClose,
  activeRoute,
}: Props) => {
  return (
    //@ts-ignore
    <SwipeableDrawer
      hideBackdrop={true}
      anchor={'right'}
      open={isOpen}
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
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={onClose}
          onKeyDown={onClose}
          className={'box'}
        >
          <List>
            {links.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => onLinkClick(link.route)}
                  className={'listItemButtonCustom'}
                  disabled={link.disabled}
                >
                  <Typography
                    text={link.name}
                    variant={activeRoute === link.route ? 'button' : 'body2'}
                    className={'nameText'}
                  />
                  {activeRoute === link.route && (
                    <div className='greenDivideLine' />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <BottomButton>{BottomComponent && <BottomComponent />}</BottomButton>
      </DrawerStyled>
    </SwipeableDrawer>
  );
};
