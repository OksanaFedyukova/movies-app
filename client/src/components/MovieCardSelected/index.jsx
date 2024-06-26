import {useState} from 'react'
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarsIcon from '@mui/icons-material/Stars';

export default function MovieCardSelected({movie, onCardDelete}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const renderStars = () => {
    const starCount = Math.round(movie.voteAverage / 2); 
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarsIcon key={index} sx={{ color: index < starCount ? "yellow" : "grey" }} />
    ));
    return stars;
  };
  return (
    <Card sx={{ display: 'flex', width:"90%", ml:2, mt:2 }}>
     
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
        <MenuItem onClick={onCardDelete}>Delete</MenuItem>
       
      </Menu>
      
         <CardMedia
        component="img"
        sx={{ height: 130, minWidth: 150, maxWidth:150}}
        image={movie.image}
        alt={movie.title}
      />
     <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="subtitle1" variant="h6" 
          sx={{
                    fontSize:15,
                }}>
           {movie.title}
          </Typography>
          {movie.genres?.length ? (
             <Typography variant="subtitle1" color="text.secondary" component="div">
           {movie.genres[0].name} 
           </Typography>) : null}
         
           <Typography  variant="h5">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {renderStars()}
      </Box>
    </Typography>
        </CardContent>
        <IconButton aria-label="moreOptions" sx={{ color: 'black', borderRadius:"3px" }} onClick={handleMenuOpen}>  
             <MoreVertIcon  onClick={onCardDelete}sx={{ color: 'black' }}/>         
          </IconButton>
    </Card>
  );
}
MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    voteAverage: PropTypes.number,
    image: PropTypes.string,

    genres:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number,
      name:PropTypes.string
    })),
    voteCount:PropTypes.number,
  }).isRequired,
  onCardDelete: PropTypes.func, 
};
MovieCardSelected.displayName = 'MovieCardSelected';
