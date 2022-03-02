import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchShowOrMovieDetail,
  getDetails,
} from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";

export const MovieDetail = () => {
  const { imdbId } = useParams();
  const dispatch = useDispatch();
  // const getDetail = useSelector(getDetails);
  // console.log("getDetail:", getDetail);

  useEffect(() => {
    dispatch(fetchShowOrMovieDetail(imdbId));
  }, []);

  return <div>MovieDetail</div>;
};
