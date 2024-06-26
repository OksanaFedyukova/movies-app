import { useState, useCallback } from 'react';

const useMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const selectMovie = useCallback((movie) => {
    setSelectedMovies((prevMovies) => {
      if (!prevMovies.find(({ id }) => id === movie.id)) {
        return [movie, ...prevMovies];
      }
      return prevMovies;
    });
  }, []);

  const deleteMovie = useCallback(() => {}, []);

  return {
    selectedMovies,
    selectMovie,
    deleteMovie
  }
}

export default useMovies;
