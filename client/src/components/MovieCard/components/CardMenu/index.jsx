import * as React from 'react';
import { useState } from 'react';


import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { Box, IconButton, Menu, MenuItem } from '@mui/material';

  
export default function CardMenu({onCardSelect}) {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    
  return (
    <>
   <Box 
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          padding: 1,
          backgroundColor: 'rgba(94, 60, 60, 0.3)', 
          
          color:"#00000"
        }}
      >
        <IconButton aria-label="favorite" sx={{ color: 'white' }} >
        <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share"  sx={{ color: 'white' }} >
          <ShareIcon />                 
           </IconButton>

          <IconButton aria-label="moreOptions" sx={{ color: 'white' }} onClick={handleMenuOpen}>  
             <MoreVertIcon/>         
          </IconButton>
        </Box>
    
       <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={onCardSelect}>Add to Collection</MenuItem>
       
      </Menu>
     
      </>
 
  );
}
