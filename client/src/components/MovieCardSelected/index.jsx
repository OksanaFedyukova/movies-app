import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarsIcon from '@mui/icons-material/Stars';

export default function MovieCardSelected({movie, onCardDelete}) {

  const renderStars = () => {
    const starCount = Math.round(movie.voteAverage / 2); 
    const stars = Array.from({ length: 5 }, (_, index) => (
      <StarsIcon key={index} sx={{ color: index < starCount ? "yellow" : "grey" }} />
    ));
    return stars;
  };

  return (
    <Card sx={{ display: 'flex', width:"100%", ml:1, mt:2 }}>
         <CardMedia
        component="img"
        sx={{ height: 130, minWidth: 150, maxWidth:150}}
        image={movie.posterPath}
        alt={movie.title}
      />
     <CardContent 
     sx={{ flex: '1 0 ' }}
     >
     <Typography variant="h6" gutterBottom 
       sx={{
        whiteSpace: 'wrap',
      }}>
          {movie.title}  
      </Typography>
          {movie.genres?.length ? (
             <Typography variant="subtitle1" color="text.secondary" component="div">
           {movie.genres[0].name} 
           </Typography>) : null}
         
           <Typography  variant="h4">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {renderStars()}
      </Box>
    </Typography>
        </CardContent>
        <IconButton aria-label="moreOptions" sx={{ color: 'black', borderRadius:"3px" }} onClick={onCardDelete}>  
        <DeleteForeverIcon />
        </IconButton>
    </Card>
  );
}
MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    voteAverage: PropTypes.number,
    posterPath: PropTypes.string,

    genres:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.number,
      name:PropTypes.string
    })),
    voteCount:PropTypes.number,
  }).isRequired,
  onCardDelete: PropTypes.func, 
};
MovieCardSelected.displayName = 'MovieCardSelected';
