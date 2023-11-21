import React, { useState } from "react";
import "../styles/register.css";
import axios from "axios";

function Register() {
  const [userReg, setUserReg] = useState({});
  const [res, setRes] = useState({});
  const [errs, setErr] = useState({});
  const registerfn = () => {
    axios
      .post("/register", userReg)
      .then((response) => {
        setRes(response);
      })
      .catch((err) => {
        setErr(err);
      });
  };
  console.log(errs)
  return (
    <div className="register">
      <h1 style={{ fontSize: "3rem", margin: "0" }}>NEW ACCOUNT</h1>
      <div className="register-info">
        <h3>Username :</h3>
        <input
          type="text"
          onChange={(e) => setUserReg({ ...userReg, username: e.target.value })}
        />
        <h3>Email Address :</h3>
        <input
          type="text"
          onChange={(e) => setUserReg({ ...userReg, email: e.target.value })}
        />
        <h3>Password :</h3>
        <input
          type="text"
          onChange={(e) => setUserReg({ ...userReg, password: e.target.value })}
        />
      </div>
      <h1>{res}</h1>
      <button className="bt" onClick={() => registerfn()}>
        <p className="tag-btn" style={{ color: "white" }}>
          CREATE ACCOUNT
        </p>
      </button>
    </div>
  );
}

export default Register;
