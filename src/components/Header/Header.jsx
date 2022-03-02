import { useState } from "react";

import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie, fetchShows } from "../../features/movies/movieSlice";

import { getDetails } from "../../features/movies/movieSlice";

export const Header = () => {
  const [searchTern, setsearchTern] = useState("");
  const dispatch = useDispatch();
  const getDetail = useSelector(getDetails);
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">FindYourMovie</div>
        </Link>
        {!getDetail ? (
          <div className="search">
            <input
              type="text"
              value={searchTern}
              onChange={(e) => {
                setsearchTern(e.target.value);
              }}
              placeholder="Search Movie Or Show"
            />
            <button
              disabled={searchTern === "" ? true : false}
              onClick={() => {
                dispatch(fetchShows(searchTern));
                dispatch(fetchMovie(searchTern));
                setsearchTern("");
              }}
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        ) : null}
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
      )
    </>
  );
};
