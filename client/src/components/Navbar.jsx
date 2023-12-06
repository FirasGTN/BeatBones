import React from "react";
import "../styles/Navbar.css";
import BrandLogo from "../pic/BrandLogo.png";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div
      className={
        props.homeNavbar ? "home-navbar navbar" : "store-navbar navbar"
      }
    >
      <div className="nav-one">
        <img src={BrandLogo} alt="" id="imglogo" />
        <h1 id="figos">BeatBones</h1>
      </div>
      <div className="search-ic">
        <AiOutlineSearch size={35} />
      </div>
    </div>
  );
}

export default Navbar;
