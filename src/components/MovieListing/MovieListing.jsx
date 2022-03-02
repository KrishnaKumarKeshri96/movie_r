import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import { MovieCard } from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "./MovieListing.scss";
import { settings } from "./Setting";

export const MovieListing = () => {
  const allMovie = useSelector(getAllMovies);
  const allShows = useSelector(getAllSeries);

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movie List</h2>
          <div className="movie-container">
            <Slider {...settings}>
              {allMovie.Response === "True" ? (
                allMovie.Search.map((movie, index) => (
                  <MovieCard key={index} {...movie} />
                ))
              ) : (
                <h1>{allMovie.Error}</h1>
              )}
            </Slider>
          </div>
        </div>
        <div className="movie-list">
          <h2>Show List</h2>
          <div className="movie-container">
            <Slider {...settings}>
              {allShows.Response === "True" ? (
                allShows.Search.map((movie, index) => (
                  <MovieCard key={index} {...movie} />
                ))
              ) : (
                <h1>{allShows.Error}</h1>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
