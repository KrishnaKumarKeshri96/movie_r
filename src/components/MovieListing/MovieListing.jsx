import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";

export const MovieListing = () => {
  const allMovie = useSelector(getAllMovies);

  return <div>MovieListing</div>;
};
