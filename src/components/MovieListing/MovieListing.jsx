import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieListing.scss";
export const MovieListing = () => {
  const allMovie = useSelector(getAllMovies);

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movie List</h2>
          <div className="movie-container">
            {allMovie.Response === "True"
              ? allMovie.Search.map((movie, index) => (
                  <MovieCard key={index} {...movie} />
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};
