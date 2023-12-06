import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Allproducts from "../components/Allproducts";
import Navbar from "../components/Navbar";
import "../styles/Store.css";

function Store() {
  const navigate = useNavigate();
  let [store, setStore] = useState("store");
  const [token] = useState(localStorage.getItem("token"));
  const [userid] = useState(localStorage.getItem("id"));
  const [role] = useState(localStorage.getItem("acc"));
  const [productFilter, setProductFilter] = useState("all");

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
  const OneProdShow = () => {
    setStore("SCOP");
  };

  return (
    <div
      className={
        store === "store"
          ? "store"
          : store === "SCOH"
          ? "SCOH"
          : store === "SCOP"
          ? "SCOP"
          : "SCOA"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {store === "store" || store === "SCOA" ? (
          <IoHome size={"3rem"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo">
        {store === "SCOA" || store === "SCOH" ? (
          <MdLocalGroceryStore
            size={"3rem"}
            color="#F4EEE0"
            className="icons-effect"
          />
        ) : (
          <p style={{ display: "none" }}></p>
        )}
        <div className="teststore remove-effect">
          <Navbar storeNavbar=" " />
          <div className="filter">
            <div className="filter-container">
              <div className="button-container-1">
                <span class="mas">HEADPHONES</span>
                <button
                  className="bt"
                  onClick={() => setProductFilter("headphone")}
                >
                  HEADPHONES
                </button>
              </div>
              <div className="button-container-1">
                <span class="mas">EARBUDS</span>
                <button
                  className="bt"
                  onClick={() => setProductFilter("earbuds")}
                >
                  EARBUDS
                </button>
              </div>
              <div className="button-container-1">
                <span class="mas">SPEAKERS</span>
                <button
                  className="bt"
                  onClick={() => setProductFilter("speakers")}
                >
                  SPEAKERS
                </button>
              </div>
              <div className="button-container-1">
                <span class="mas">GAMING</span>
                <button
                  className="bt"
                  onClick={() => setProductFilter("gaming")}
                >
                  GAMING
                </button>
              </div>
            </div>
          </div>
          <Allproducts
            productFilter={productFilter}
            OneProdShow={OneProdShow}
          />
        </div>
      </nav>
      <nav
        className="divthree"
        onClick={() => (token ? accounthandle() : loginhandle())}
      >
        {store === "store" || store === "SCOH" ? (
          <FaUser size={"2.7rem"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Store;
