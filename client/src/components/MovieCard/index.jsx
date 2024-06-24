import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardMenu from './components/CardMenu';
import StarsIcon from '@mui/icons-material/Stars';
import { Box } from '@mui/material';

export default function MovieCard({movie, onCardSelect}) {

  const formatrelease_date = (dateString) => {
    if (!dateString) return ''; 
  
    const parts = dateString.split(/[T\s]/);
    if (parts.length < 1) return ''; 
  
    const [year, month] = parts[0].split('-').slice(0, 2);
  
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };
  
  const renderStars = () => {
    const starCount = Math.round(movie.voteAverage / 2); 
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarsIcon key={index} sx={{ color: index < starCount ? "yellow" : "grey" }} />
    ));
    return stars;

  };
  return (
    <Card sx={{ maxWidth: 250, position: 'relative' }}>
      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />
      
       
      <CardContent>
      <Typography variant="h6" gutterBottom 
       sx={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>
{movie.title}  
      </Typography>

        <Typography variant="subtitle2" gutterBottom>
        {formatrelease_date(movie.releaseDate)}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {renderStars()}
      </Box> 
 <CardMenu onCardSelect={onCardSelect}/>

      </CardContent>
   
   
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    voteAverage:PropTypes.number,
    genres:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number,
      name:PropTypes.string
    })),
    runtime:PropTypes.number
  }).isRequired,
  onCardSelect: PropTypes.func, 
};
MovieCard.displayName = 'MovieCard';
