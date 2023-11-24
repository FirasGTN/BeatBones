import React, { useEffect, useState } from "react";
import Allproducts from "../components/Allproducts";
import "../styles/Store.css";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../redux/action/index";
import { useDispatch } from "react-redux";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import ButtonTwo from "../components/ButtonTwo";

function Store() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  });
  let [store, setStore] = useState("store");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const homehandle = () => {
    setStore("SCOH");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const accounthandle = () => {
    setStore("SCOA");
    setTimeout(() => {
      navigate("/account");
    }, 1000);
  };
  const loginhandle = () => {
    setStore("SCOA");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div
      className={
        store === "store" ? "store" : store === "SCOH" ? "SCOH" : "SCOA"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {store === "store" || store === "SCOA" ? (
          <IoHome size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo">
        <div className="teststore">
          <div className="filter">
            <h1>ALL PRODUCT</h1>
            <div className="filter-container">
              <Link to="/store/headphones">
                <ButtonTwo name="HEADPHONES" color="white"></ButtonTwo>
              </Link>
              <Link to="/store/earbuds">
                <ButtonTwo name="EARBUDS" color="white"></ButtonTwo>
              </Link>
              <Link to="/store/speakers">
                <ButtonTwo name="SPEAKERS" color="white"></ButtonTwo>
              </Link>
              <Link to="/store/gaming">
                <ButtonTwo name="GAMING" color="white"></ButtonTwo>
              </Link>
            </div>
          </div>
          <Allproducts />
        </div>
      </nav>
      <nav
        className="divthree"
        onClick={() => (token ? accounthandle() : loginhandle())}
      >
        {store === "store" || store === "SCOH" ? (
          <FaUser size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Store;
