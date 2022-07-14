import React, { FC, useState } from 'react';

import { SwipeableDrawer } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { styled } from '@mui/material/styles';
import { BlueCloseCross } from 'assets/svg';

import Typography from 'components/Typography/Typography';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export type Props = {
  title: string;
  links: [];
  bottomButton: FC;
};

const DrawerStyled = styled('div')({
  width: '360px',
  '& .box': {
    width: '100%',
  },
  '& .listItemButtonCustom': {
    justifyContent: 'center',
  },
});

const TitleBlock = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 25px',
});

const BottomButton = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const SidebarMenuComponent: FC<Props> = ({
  title,
  links,
  bottomButton,
}: Props) => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={'box'}
    >
      <List>
        {links.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton className={'listItemButtonCustom'}>
              <Typography text={link} variant='button' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      {/*add onClick logic on main-frontend*/}
      <Button onClick={toggleDrawer('right', true)}>right</Button>
      {/*@ts-ignore*/}
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        <DrawerStyled>
          <TitleBlock>
            {title}
            <div aria-hidden='true' onClick={toggleDrawer('right', false)}>
              <BlueCloseCross />
            </div>
          </TitleBlock>
          <Divider />
          {/*add links logic on main-frontend*/}
          {list('right')}
          <BottomButton>{bottomButton}</BottomButton>
        </DrawerStyled>
      </SwipeableDrawer>
    </>
  );
};
