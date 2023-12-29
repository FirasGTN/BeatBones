import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdLocalGroceryStore } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Store.css";
import axios from "axios";

function Search() {
  const { search } = useParams();
  const navigate = useNavigate();
  let [store, setStore] = useState("store");
  const [token] = useState(localStorage.getItem("token"));
  const [userid] = useState(localStorage.getItem("id"));
  const [role] = useState(localStorage.getItem("acc"));
  const [searchRes, SetSearchRes] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/store/search/${search}`)
      .then((res) => {
        SetSearchRes(res.data.results);
      })
      .catch((err) => SetSearchRes(err.response.data.message));
  });

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

  const OneproductHandel = (ids) => {
    OneProdShow();
    setTimeout(() => {
      navigate(`/store/${ids}`);
    }, 1000);
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
          <IoHome size={"3.5vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo">
        {store === "SCOA" || store === "SCOH" ? (
          <MdLocalGroceryStore
            size={"3.5vw"}
            color="#F4EEE0"
            className="icons-effect"
          />
        ) : (
          <p style={{ display: "none" }}></p>
        )}
        <div className="teststore remove-effect">
          <Navbar storeNavbar=" " search=" " />
          {typeof searchRes === "object" && searchRes ? (
            <div className="car-container">
              {searchRes.map((prod) => (
                <div className="card" key={prod.id}>
                  <div
                    className="link-prod"
                    onClick={() => {
                      OneproductHandel(prod.name);
                    }}
                  >
                    <figure>
                      <img src={prod.image} alt="" />
                      <h1 className="prod prodname">{prod.name}</h1>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          ) : typeof searchRes === "string" ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: "300px",
                fontSize: "1.5vw",
              }}
            >
              <h1>Nothing Found </h1>
              <h3 style={{ width: "50%", textAlign: "center" }}>
                Sorry, the product you're looking for doesn't exist. You can try
                going back to the{" "}
                <span
                  style={{
                    color: "#007bff",
                    fontWeight: "400",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/store");
                  }}
                >
                  store
                </span>
              </h3>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </nav>
      <nav
        className="divthree"
        onClick={() => (token ? accounthandle() : loginhandle())}
      >
        {store === "store" || store === "SCOH" ? (
          <FaUser size={"2.7vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Search;
