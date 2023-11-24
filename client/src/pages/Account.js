import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { getAccount } from "../redux/action";
// import Login from "./Login"

function Account() {
  let [account, setAccount] = useState("account");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccount());
  }, []);

  const data = useSelector((store) => store);
  const users = data.userShow?.data.users;
  console.log(users);
  const storehandle = () => {
    setAccount("ACOS");
    setTimeout(() => {
      navigate("/store");
    }, 1000);
  };

  const homehandle = () => {
    setAccount("ACOH");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div
      className={
        account === "account" ? "account" : account === "ACOS" ? "ACOS" : "ACOH"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {account === "account" || account === "ACOS" ? (
          <IoHome size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {account === "account" || account === "ACOH" ? (
          <MdLocalGroceryStore size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divthree">{/* <Login/> */}</nav>
    </div>
  );
}

export default Account;
