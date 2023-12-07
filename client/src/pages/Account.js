import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "../styles/AdminAcc.css";
// import { LuUserSquare2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import UsersManage from "../components/UsersManage";
import AccountSetting from "../components/AccountSetting";
import ProductSetting from "../components/ProductSetting";
import axios from "axios";

function Account({ onlogout }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [accountData, setAccountData] = useState();
  let [account, setAccount] = useState("account");
  let [test, setTest] = useState(false);
  let [role] = useState(localStorage.getItem("acc"));
  let [componentShow, setComponentShow] = useState("account-set");
  let [total, setTotal] = useState();
  let tt = 0;

  useEffect(() => {
    axios
      .get(`/account/${id}`)
      .then((response) => {
        setAccountData(response.data);
        if (accountData.cart) {
          accountData.cart.product.map(
            (pr) => (tt += Number(pr.price.$numberDouble))
          );
          setTotal(tt);
        }
      })
      .catch((err) => {
        console.log(err);
      });
      setTimeout(() => {
        setTest(true);
      }, 700);
    });
    
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

  const logout = () => {
    setAccount("ACOH");
    setTimeout(() => {
      onlogout();
      localStorage.removeItem("acc");
      localStorage.removeItem("id");
      localStorage.removeItem("token");
      navigate("/");
    }, 900);
  };

  // const banhandle = async () => {
  //   const ustest = { userBan };
  //   try {
  //     const response = await axios.put("/banuser", ustest);
  //     if (response) {
  //       console.log(response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div
      className={
        account === "account" ? "account" : account === "ACOS" ? "ACOS" : "ACOH"
      }
    >
      <nav className="divone" onClick={() => homehandle()}>
        {account === "account" || account === "ACOS" ? (
          <IoHome size={"3rem"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {account === "account" || account === "ACOH" ? (
          <MdLocalGroceryStore size={"3rem"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divthree">
        {account === "ACOS" || account === "ACOH" ? (
          <FaUser
            size={"2.7rem"}
            color="#F4EEE0"
            className="icons-effect icons-effect-log"
          />
        ) : (
          <p style={{ display: "none" }}></p>
        )}
        <div className="remove-effect">
          {role === "b" ? (
            <div className="admin-dashbord">
              <section className="admin-section-one">
                {test === true ? (
                  <div>
                    <div className="user-admin-tag">
                      <FaUser size={"2.7rem"} color="#F4EEE0" />
                      <span>
                        <h2>FIRAS</h2>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            cursor: "pointer",
                          }}
                          onClick={() => logout()}
                        >
                          <CiLogout size={30} />
                          <h3>Log out</h3>
                        </div>
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        height: "70vh",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="nav-admin-man">
                        <h1 onClick={() => setComponentShow("account-set")}>
                          Account Settings
                        </h1>
                        <h1 onClick={() => setComponentShow("users-set")}>
                          Users Settings
                        </h1>
                        <h1 onClick={() => setComponentShow("products-set")}>
                          Products Settings
                        </h1>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
              </section>
              <section className="admin-section-two">
                {componentShow === "account-set" ? (
                  <AccountSetting />
                ) : componentShow === "users-set" ? (
                  <UsersManage />
                ) : (
                  <ProductSetting />
                )}
              </section>
            </div>
          ) : (
            <div>
              <div>
                {accountData ? (
                  <div className="user-container">
                    <div className="user-tag-container">
                      <div className="user-tag">
                        <FaUser size={"2.7rem"} color="#121212" />
                        <h1>{accountData.data.username}</h1>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => logout()}
                      >
                        <CiLogout size={"2.7rem"} />
                      </div>
                    </div>
                    <div className="cart">
                      <div className="cart-container">
                        {accountData.cart ? (
                          accountData.cart.product.map((elt) => (
                            <div className="cart-product">
                              <img src={elt.image} alt="" />
                              <div>
                                <h1>{elt.name}</h1>
                                <h1>{elt.price.$numberDouble} $</h1>
                              </div>
                              {elt.color.map((cl) => (
                                <div style={{ backgroundColor: cl }}></div>
                              ))}
                            </div>
                          ))
                        ) : (
                          <p>test</p>
                        )}
                      </div>
                      <div className="facture">
                        <div>
                          <h1>2 Article</h1>
                          <h1>Livraison</h1>
                        </div>
                        <div>
                          <h1>{total}</h1>
                          <h1>Gratuit</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <h1></h1>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Account;
