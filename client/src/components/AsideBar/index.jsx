import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import {Link as RouterLink} from "react-router-dom";


export default function AsideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width : 250, bgcolor:"#d875755f", minHeight:"100vh" }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Setting', 'Recommend'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={RouterLink} to = {text}>
       
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </Box>
  );
const anchor = "left"
  return (
    <div>
        <React.Fragment key={anchor}>
         
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 , display: {lg:'none', xs: 'block'} }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon/>
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{ bgcolor: '#d875755f' }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
