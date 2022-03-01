import { useEffect } from "react";

import { MovieListing } from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import { fetchMovie } from "../../features/movies/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};
