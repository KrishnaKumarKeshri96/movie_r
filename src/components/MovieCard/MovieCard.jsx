import "./MovieCard.scss";
import { Link } from "react-router-dom";

export const MovieCard = ({ Poster, Title, Year, imdbID }) => {
  //   console.log(Poster);
  return (
    <>
      <Link to={`/movie/${imdbID}`}>
        <div className="card-item">
          <div className="card-inner">
            <div className="card-top">
              <img src={Poster} alt={Title} />
            </div>
            <div className="card-bottom">
              <div className="card-info">
                <h4>{Title}</h4>
                <p>{Year}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
