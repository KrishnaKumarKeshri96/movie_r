import { useEffect } from "react";

import { MovieListing } from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchMovie, fetchShows } from "../../features/movies/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
    dispatch(fetchShows());
  }, [dispatch]);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};
