import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { getAccount } from "../redux/action";
import { FaUser } from "react-icons/fa";
// import Login from "./Login"

function Account() {
  let [account, setAccount] = useState("account");
  let [users, setUsers] = useState();
  let [role] = useState(localStorage.getItem("acc"));

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store);

  useEffect(() => {
    if (role === "b") {
      dispatch(getAccount());
      if (data.userShow) {
        setUsers(data.userShow.data.users);
      }
    }
  }, [data.userShow, dispatch]);

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
  return (
    <div
      className={
        account === "account" ? "account" : account === "ACOS" ? "ACOS" : "ACOH"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {account === "account" || account === "ACOS" ? (
          <IoHome size={50} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {account === "account" || account === "ACOH" ? (
          <MdLocalGroceryStore size={50} color="#F4EEE0" />
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
        <div className="remove-effect">
          <h1>iefjgiorej irtgo ihrtihi rth tiughrtiuh oriprjeoiv</h1>
          {/* { role === "b"  ? <h1>test</h1> : <h1>trye</h1>} */}
          {/* {role === "b" && users ?
            {users.map((user) => {
              return (
                <div>
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>
              </div>
            );
          })} : return (
              <div className="user"><h1>user</h1></div>
              )
              
        } */}
        </div>
      </nav>
    </div>
  );
}

export default Account;
