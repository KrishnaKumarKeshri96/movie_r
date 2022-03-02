import { useState } from "react";

import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";

export const Header = () => {
  const [searchTern, setsearchTern] = useState("");
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logo">FindYourMovie</div>
        </Link>

        <div className="search">
          <input
            type="text"
            value={searchTern}
            onChange={(e) => {
              setsearchTern(e.target.value);
            }}
            placeholder="Search Movie Or Show"
          />
          <button onClick={() => console.log(searchTern)}>
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </>
  );
};
