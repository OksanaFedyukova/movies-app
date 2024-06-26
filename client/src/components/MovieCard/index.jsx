import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardMenu from './components/CardMenu';
import StarsIcon from '@mui/icons-material/Stars';
import { Box } from '@mui/material';

export default function MovieCard({movie, onCardSelect}) {

  
  
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
        {movie.releaseDate}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {renderStars()}
      </Box> 
      <CardMenu onCardSelect={() => onCardSelect(movie)} />

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
