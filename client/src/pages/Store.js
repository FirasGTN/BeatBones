import React, { useEffect, useState } from "react";
import Allproducts from "../components/Allproducts";
import "../styles/Store.css";
import { Link, useNavigate } from "react-router-dom";
import { getData } from "../redux/action/index";
import { useDispatch } from "react-redux";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import ButtonTwo from "../components/ButtonTwo";
import { MdLocalGroceryStore } from "react-icons/md";

function Store() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  });
  let [store, setStore] = useState("store");
  const [token] = useState(localStorage.getItem("token"));
  const [userid] = useState(localStorage.getItem("id"));
  const [role] = useState(localStorage.getItem("acc"));
  console.log(userid);

  const navigate = useNavigate();
  const homehandle = () => {
    setStore("SCOH");
    setTimeout(() => {
      navigate("/");
    }, 900);
  };
  const accounthandle = () => {
    setStore("SCOA");
    if (role === "u") {
      setTimeout(() => {
        navigate(`/account/${userid}`);
      }, 900);
    } else {
      setTimeout(() => {
        navigate(`/admin/${userid}`);
      }, 900);
    }
  };
  const loginhandle = () => {
    setStore("SCOA");
    setTimeout(() => {
      navigate("/login");
    }, 900);
  };

  return (
    <div
      className={
        store === "store" ? "store" : store === "SCOH" ? "SCOH" : "SCOA"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {store === "store" || store === "SCOA" ? (
          <IoHome size={50} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo">
        {store === "SCOA" || store === "SCOH" ? (
          <MdLocalGroceryStore
            size={50}
            color="#F4EEE0"
            className="icons-effect"
          />
        ) : (
          <p></p>
        )}
        <div className="teststore remove-effect">
          {/* <div className="back-color"></div> */}
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
          <FaUser size={45} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Store;
