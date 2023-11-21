import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({});
  const [res, setRes] = useState();
  const [errs, setErr] = useState();
  const loginfn = () => {
    axios
      .post("/login", user)
      .then((response) => {
        setRes(response);
      })
      .catch((err) => {
        setErr(err.response.data.message);
      });
  };
  console.log(res);
  return (
    <div className="login-container">
      <div className="login">
        <div className="login-info">
          <h3>Email Address :</h3>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <h3>Password :</h3>
          <input
            type="text"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        {errs ? <p>{errs}</p> : res ? <p>{res.data.message}</p> : res}
        <button className="bt" onClick={() => loginfn()}>
          <p className="tag-btn" style={{ color: "white" }}>
            LOGIN
          </p>
        </button>
      </div>
      <div className="register-sug">
        <h3>New customer</h3>
        <p>Create an account with us and you'll be able to:</p>
        <ul>
          <li>Checkout out faster</li>
          <li>Save multiple shipping addresse</li>
          <li>Acces your history</li>
          <li>Track new orders</li>
        </ul>
        <Link className="register-link" to="/register">
          Create Account{" "}
        </Link>
      </div>
    </div>
  );
}

export default Login;
