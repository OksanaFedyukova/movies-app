import { Box, Grid, Paper, styled, Link } from "@mui/material";
import MovieCard from "../../components/MovieCard";
import { useQuery } from "@apollo/client";
import Pagination from "@mui/material/Pagination";
import { MOVIES_QUERY } from "./queries";
import { Filters } from '../../components/Filters';
import { useFilters } from '../../hooks/useFilters';
import MovieCardSelected from "../../components/MovieCardSelected";
import { Link as RouterLink } from "react-router-dom";
import useMovies from '../../hooks/useMovies';
import SelectedMoviesSection from "../../components/SelectedMoviesSection";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height: "calc(100vh - 30px)",
  position: "sticky",
  top: theme.spacing(2),
}));

const Home = () => {

  const { filter, setPage, setFilter } = useFilters();
  const {loading, error, data } = useQuery(MOVIES_QUERY, { variables: {filter}});
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const paginationHandler = (event, page) => {
      setPage(page)
  }
  if (error) {
      return 'Error';
  }

  const onSubmit=(data) => {
      console.log(data);
      setFilter(data);
  }

  const pagesCount = data?.movies?.totalPages <= 500 ? data?.movies?.totalPages : 500;

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ bgcolor: "#f6c6c6" }}>

            <Filters onSubmit={onSubmit} initialValues={filter}/>

            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper>
              <Box sx={{ flexGrow: 1, padding: 1 }}>
                {loading && "Loading..."}
                {data && (
                  <Grid container spacing={2}>
                    {data.movies.results.map((movie) => (
                      <Grid key={movie.id} item xs={6} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie} onCardSelect={selectMovie} />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
              <Box
                mt={2}
                pb={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Pagination count={pagesCount}
                                page={filter.page}
                                onChange={paginationHandler}/>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <SelectedMovies>
              <Link
                variant="h5"
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 2,
                  ml: 10,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  margin: "15",
                  textDecoration: 'none',
                  display: { xs: 'block', sm: 'block' },
                }}
              >
                MY SELECTION
              </Link>
              <SelectedMoviesSection selectedMovies={selectedMovies} deleteMovie={deleteMovie}/>

            </SelectedMovies>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
