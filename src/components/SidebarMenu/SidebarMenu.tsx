import React, { FC, useState, SVGProps } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export type SVGIcon = FC<SVGProps<SVGSVGElement>>;
export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export type Props = {
  title: string;
  links: [];
  IconCross: SVGIcon;
  onClose: () => void;
};

const Body = styled('div')(
  () => `
width: 100%;
height: fit-content;
background: #f6f7f9;
display: flex;
align-items: center;
justify-content: center;
padding: 16px 120px 18px 94px;
`
);

export const SidebarMenuComponent: FC<Props> = ({
  title,
  links,
  IconCross,
  onClose,
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
    >
      <List>
        {links.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Body>
      <Button onClick={toggleDrawer('right', true)}>right</Button>
      <SwipeableDrawer
        anchor={'right'}
        open={state['right']}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {title}
        <div aria-hidden='true' onClick={onClose}>
          <IconCross />
        </div>
        <Divider />
        {list('right')}
      </SwipeableDrawer>
    </Body>
  );
};
