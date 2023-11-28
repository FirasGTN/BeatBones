import React, { useState } from "react";
import "../styles/register.css";
import axios from "axios";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";

function Register() {
  const [userReg, setUserReg] = useState({});
  const [res, setRes] = useState();
  const [errs, setErr] = useState();
  let [register, setregister] = useState("account");
  const navigate = useNavigate();
  const registerfn = () => {
    axios
      .post("/register", userReg)
      .then((response) => {
        setErr();
        setRes(response);
        setregister("ACOR");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      })
      .catch((err) => {
        setRes();
        setErr(err);
      });
  };
  const storehandle = () => {
    setregister("ACOS");
    setTimeout(() => {
      navigate("/store");
    }, 900);
  };

  const homehandle = () => {
    setregister("ACOH");
    setTimeout(() => {
      navigate("/");
    }, 900);
  };
  return (
    <div
      className={
        register === "account"
          ? "account"
          : register === "ACOS"
          ? "ACOS"
          : register === "ACOR"
          ? "ACOR"
          : "ACOH"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {register === "account" ||
        register === "ACOS" ||
        register === "ACOR" ? (
          <IoHome size={50} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      {}
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {register === "account" ||
        register === "ACOH" ||
        register === "ACOR" ? (
          <MdLocalGroceryStore size={50} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divthree register-nav">
        {register === "ACOS" || register === "ACOH" ? (
          <FaUser
            size={45}
            color="#F4EEE0"
            className="icons-effect icons-effect-log"
          />
        ) : (
          <p></p>
        )}
        <div className="remove-effect register-container">
          <h1 style={{ fontSize: "3rem", margin: "0" }}>NEW ACCOUNT</h1>
          <div className="register-info">
            <h3>Username :</h3>
            <input
              type="text"
              onChange={(e) =>
                setUserReg({ ...userReg, username: e.target.value })
              }
            />
            <h3>Email Address :</h3>
            <input
              type="text"
              onChange={(e) =>
                setUserReg({ ...userReg, email: e.target.value })
              }
            />
            <h3>Password :</h3>
            <input
              type="text"
              onChange={(e) =>
                setUserReg({ ...userReg, password: e.target.value })
              }
            />
          </div>
          {errs ? (
            <p>{errs.response.data.message}</p>
          ) : res ? (
            <p>{res.data.message}</p>
          ) : (
            res
          )}
          <button className="bt" onClick={() => registerfn()}>
            <p className="tag-btn">CREATE ACCOUNT</p>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Register;
