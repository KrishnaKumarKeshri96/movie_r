import { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchShowOrMovieDetail,
  getDetails,
  removeShowOrMovieDetail,
} from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";

export const MovieDetail = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  const {
    Title,
    Year,

    Runtime,
    Genre,
    Director,

    Actors,
    imdbRating,
    imdbVotes,
    Plot,
    Language,
    Awards,
    Poster,
  } = useSelector(getDetails);
  // console.log("getDetail:", getDetail);

  useEffect(() => {
    dispatch(fetchShowOrMovieDetail(imdbId));

    return () => {
      dispatch(removeShowOrMovieDetail());
    };
  }, [dispatch, imdbId]);

  return (
    <>
      <div className="movie-section">
        {!Title ? (
          <h1>...Loading</h1>
        ) : (
          <>
            <div className="section-left">
              <div className="movie-title">{Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB rating <i className="fa fa-star"></i>: {imdbRating}
                </span>
                <span>
                  IMDB Votes <i className="fa fa-thumbs-up"></i>: {imdbVotes}
                </span>
                <span>
                  Runtime <i className="fa fa-film"></i>: {Runtime}
                </span>
                <span>
                  Year <i className="fa fa-calendar"></i>: {Year}
                </span>
              </div>
              <div className="movie-plot">{Plot}</div>

              <div className="movie-info">
                <div>
                  <span>Director : </span>
                  <span>{Director}</span>
                </div>
                <div>
                  <span>Stars : </span>
                  <span>{Actors}</span>
                </div>
                <div>
                  <span>Genres : </span>
                  <span>{Genre}</span>
                </div>
                <div>
                  <span>Languages : </span>
                  <span>{Language}</span>
                </div>
                <div>
                  <span>Awards : </span>
                  <span>{Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={Poster} alt={Title} />
            </div>
          </>
        )}
      </div>
    </>
  );
};
