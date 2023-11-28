import React, { useEffect, useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserLoginSuccess,
  fetchUserLoginFailure,
} from "../redux/action/index";
import axios from "axios";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function Login({ onLogin }) {
  const [user, setUser] = useState({});
  let [account, setAccount] = useState("account");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user.userLogin);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  const loginfn = async () => {
    try {
      const response = await axios.post("/login", user);
      if (response && response.data) {
        setAccount("ACOS");
        localStorage.setItem("id", response.data.data.userId);
        localStorage.setItem("token", response.data.data.token);
        if (response.data.data.role === "admin") {
          localStorage.setItem("acc", "b");
        } else {
          localStorage.setItem("acc", "u");
        }
        setTimeout(() => {
          onLogin();
        }, 1000);
        dispatch(fetchUserLoginSuccess(response.data.message));
        setTimeout(() => {
          navigate("/store");
        }, 1000);
      } else {
        dispatch(fetchUserLoginFailure("Invalid token"));
      }
    } catch (err) {
      dispatch(
        fetchUserLoginFailure(
          err.response?.data?.message || "An error occurred"
        )
      );
    }
  };
  const storehandle = () => {
    setAccount("ACOS");
    setTimeout(() => {
      navigate("/store");
    }, 900);
  };

  const homehandle = () => {
    setAccount("ACOH");
    setTimeout(() => {
      navigate("/");
    }, 900);
  };
  
  const registerhandle = () => {
    setAccount("ACOR");
    setTimeout(() => {
      navigate("/register");
    }, 1500);
  };
  return (
    <div
      className={
        account === "account"
          ? "account"
          : account === "ACOS"
          ? "ACOS"
          : account === "ACOR"
          ? "ACOR"
          : "ACOH"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {account === "account" || account === "ACOS" || account === "ACOR" ? (
          <IoHome
            size={50}
            color="#F4EEE0"
            className={account === "ACOR" ? "ACOR-icons" : ""}
          />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {account === "account" || account === "ACOH" || account === "ACOR" ? (
          <MdLocalGroceryStore
            size={50}
            color="#F4EEE0"
            className={account === "ACOR" ? "ACOR-icons" : ""}
          />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divthree">
        {account === "ACOS" || account === "ACOH" ? (
          <FaUser
            size={45}
            color="#F4EEE0"
            className="icons-effect icons-effect-log"
          />
        ) : (
          <p></p>
        )}
        <div className="login-container remove-effect">
          <div className="login">
            <div className="login-info">
              <h3>Email Address :</h3>
              <input
                type="text"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <h3>Password :</h3>
              <input
                type="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            {userLogin ? <p>{userLogin}</p> : error ? <p>{error}</p> : error}
            <button className="bt" onClick={() => loginfn()}>
              <p className="tag-btn">LOGIN</p>
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
            <button className="register-link" onClick={() => registerhandle()}>
              Create Account
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Login;
