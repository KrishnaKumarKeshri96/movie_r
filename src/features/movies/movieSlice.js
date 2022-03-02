import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/movieApiKey";

const initialState = {
  movies: {},
  shows: {},
  showDetails: {},
};

export const fetchMovie = createAsyncThunk("movies/fetchMovie", async () => {
  const response = await fetchApi.get(`?apiKey=${APIKEY}&s=Hero&type=movie`);
  return response.data;
});

export const fetchShows = createAsyncThunk("movies/fetchShows", async () => {
  const response = await fetchApi.get(
    `?apiKey=${APIKEY}&type=series&s=game&page=3`
  );
  return response.data;
});

export const fetchShowOrMovieDetail = createAsyncThunk(
  "movies/fetchShowOrMovieDetail",
  async (imdbId) => {
    const response = await fetchApi.get(
      `?apiKey=${APIKEY}&i=${imdbId}&plot=full`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,

  // reducer is not required For Async Function.
  // reducers: {
  //   addMovies: (state, { payload }) => {
  //     state.movies = payload;
  //   },
  // },
  extraReducers: {
    [fetchMovie.pending]: () => console.log("Pending State"),
    [fetchMovie.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, movies: payload };
    },
    [fetchMovie.rejected]: () => console.log("Failed"),
    [fetchShows.fulfilled]: (state, { payload }) => {
      // console.log("Fulfilled", state, payload);
      return { ...state, shows: payload };
    },
    [fetchShowOrMovieDetail.fulfilled]: (state, { payload }) => {
      // console.log("Fulfilled", state, payload);
      return { ...state, showDetails: payload };
    },
  },
});

// export const { addMovies } = movieSlice.actions; not required for async actions

export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.shows;
export const getDetails = (state) => state.movies.showDetails;
export const movieReducer = movieSlice.reducer;
