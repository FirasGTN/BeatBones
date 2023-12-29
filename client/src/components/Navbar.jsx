import React, { useState } from "react";
import "../styles/Navbar.css";
import BrandLogo from "../pic/BrandLogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";

function Navbar(props) {
  const [search, SetSerach] = useState({});
  const navigate = useNavigate();
  return (
    <div
      className={
        props.homeNavbar ? "home-navbar navbar" : "store-navbar navbar"
      }
    >
      <div className="nav-one">
        <img src={BrandLogo} alt="" id="imglogo" />
        <h1 id="figos">BeatBones</h1>
        {props.search ? (
          <h4
            style={{
              fontWeight: "400",
              fontStyle: "italic",
              cursor: "pointer",
            }}
            onClick={() => navigate("/store")}
          >
            Store
          </h4>
        ) : (
          <p></p>
        )}
      </div>
      <div class="search-box">
        <input
          class="search-text"
          type="text"
          placeholder="Search Anything"
          onChange={(e) => SetSerach({ ...search, searchNeed: e.target.value })}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.length > 0) {
              navigate(`/search/${search.searchNeed}`);
            }
          }}
        />
        <AiOutlineSearch
          size={35}
          className="search-btn"
          onClick={(e) => {
            if (search.searchNeed) {
              navigate(`/search/${search.searchNeed}`);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;
