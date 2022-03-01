import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApi } from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/movieApiKey";

const initialState = {
  movies: {},
};

export const fetchMovie = createAsyncThunk("movies/fetchMovie", async () => {
  const response = await fetchApi.get(
    `?apiKey=${APIKEY}&s=Harry Potter&type=movie`
  );
  return response.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMovie.pending]: () => console.log("Pending State"),
    [fetchMovie.fulfilled]: (state, { payload }) => {
      console.log("Fulfilled");
      return { ...state, movies: payload };
    },
    [fetchMovie.rejected]: () => console.log("Failed"),
  },
});

export const { addMovies } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const movieReducer = movieSlice.reducer;
