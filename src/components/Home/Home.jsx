import { useEffect } from "react";

import { MovieListing } from "../MovieListing/MovieListing";
import { fetchApi } from "../../common/apis/movieApi";
import { APIKEY } from "../../common/apis/movieApiKey";

export const Home = () => {
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetchApi
        .get(`?apiKey=${APIKEY}&s=Harry&type=movie`)
        .then((success) => console.log(success))

        .catch((error) => console.log(error));
      // console.log(response);
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
