import React, { useState } from "react";
import "../styles/register.css";
import axios from "axios";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

function Register() {
  const [userReg, setUserReg] = useState({});
  const [res, setRes] = useState();
  const [errs, setErr] = useState();
  let [register, setregister] = useState("account");
  const navigate = useNavigate();
  const registerfn = () => {
    axios
      .post("/api/register", userReg)
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

  const loginhandle = () => {
    setregister("ACOR");
    setTimeout(() => {
      navigate("/login");
    }, 1500);
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
          <IoHome size={"3.5vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      {}
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {register === "account" ||
        register === "ACOH" ||
        register === "ACOR" ? (
          <MdLocalGroceryStore size={"3.5vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divthree register-nav">
        {register === "ACOS" || register === "ACOH" ? (
          <FaUser
            size={"2.7vw"}
            color="#F4EEE0"
            className="icons-effect icons-effect-log"
          />
        ) : (
          <p></p>
        )}
        <div className="remove-effect register-container">
          <IoIosArrowBack
            color="black"
            size={60}
            className="back-icon-reg"
            onClick={() => loginhandle()}
          />
          <h1 style={{ fontSize: "3.5vw", margin: "0" }}>NEW ACCOUNT</h1>
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
              type="password"
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
          <div class="button-container-2" onClick={() => registerfn()}>
            <span class="mas">Create Account</span>
            <button>Create Account</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Register;
