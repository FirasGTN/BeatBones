import React from "react";
import "../styles/Navbar.css";
import BrandLogo from "../pic/BrandLogo.png";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
function Navbar(props) {
  
  return (
    <div className="navbar">
      <div className="nav-one">
        <div className="title">
          <img src={BrandLogo} alt="" id="imglogo" />
          <h1 id="figos">FIGOS</h1>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/store">Store</Link>
            </li>
          </ul>
        </div>
      </div>
      {props.token ? (
        <ul className="nav-user">
          <li>
            <Link to="/account">
              <AiOutlineUser className="icon" size={35} />
            </Link>
          </li>
          <li>
            <button>
              <AiOutlineSearch className="icon" size={35} />
            </button>
          </li>
          <li>
            <Link to="/panie">
              <BsFillBagFill className="icon" size={30} />
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-user">
          <li>
            <Link to="/login">
              <AiOutlineUser className="icon" size={35} />
            </Link>
          </li>
          <li>
            <button>
              <AiOutlineSearch className="icon" size={35} />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
