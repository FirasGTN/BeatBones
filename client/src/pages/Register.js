import React, { useState } from "react";
import "../styles/register.css";
import axios from "axios";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router";

function Register() {
  const [userReg, setUserReg] = useState({});
  const [res, setRes] = useState();
  const [errs, setErr] = useState();
  let [register, setregister] = useState("register-con");
  const navigate = useNavigate();
  const registerfn = () => {
    axios
      .post("/register", userReg)
      .then((response) => {
        setErr();
        setRes(response);
        navigate("/login");
      })
      .catch((err) => {
        setRes();
        setErr(err);
      });
  };
  const storehandle = () => {
    setregister("RCOS");
    setTimeout(() => {
      navigate("/store");
    }, 1000);
  };

  const homehandle = () => {
    setregister("RCOH");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div
      className={
        register === "register-con"
          ? "register-con"
          : register === "RCOS"
          ? "RCOS"
          : "RCOH"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {register === "register-con" || register === "RCOS" ? (
          <IoHome size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
      {}
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {register === "register-con" || register === "RCOH" ? (
          <MdLocalGroceryStore size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="register">
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
            onChange={(e) => setUserReg({ ...userReg, email: e.target.value })}
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
          <p className="tag-btn" style={{ color: "white" }}>
            CREATE ACCOUNT
          </p>
        </button>
      </nav>
    </div>
  );
}

export default Register;
