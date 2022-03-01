import { useEffect } from "react";

import { MovieListing } from "../MovieListing/MovieListing";
import { fetchApi } from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovie = async () => {
      await fetchApi
        .get(`?apiKey=${APIKEY}&s=Harry&type=movie`)
        .then((success) => dispatch(addMovies(success.data)))

        .catch((error) => console.log(error));
    };
    fetchMovie();
  }, []);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};
