import { Box, Grid, Paper, Typography } from "@mui/material";
import MovieCardSelected from "../../components/MovieCardSelected";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { MOVIES_BY_IDS_QUERY } from "./queries";
//import { MovieCard } from "../../components";

const Recommend = () => {
  const [searchParams] = useSearchParams();

  const { loading, error, data } = useQuery(MOVIES_BY_IDS_QUERY, {
    variables: {
      ids: searchParams
        .get("ids")
        ?.split(",")
        .map((id) => +id),
    },
  });

  if (loading) {
    <div>Loading...</div>;
  }

  if (error) {
    <div>Error. Try again!</div>;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Grid container spacing={2}>

          <Grid item xs={12}>
            <Paper sx={{ bgcolor: "#f6c6c6" }}>
              <Typography variant="h1" component="h1" gutterBottom>
                {searchParams.get("title")}
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper sx={{ padding: "5px" }}>
              {data?.moviesByIds && (
                <Grid container spacing={2}>
                  {data.moviesByIds.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                      <MovieCardSelected movie={movie} isPreviewMode />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </>
  );
};
export default Recommend;
