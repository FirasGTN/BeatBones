import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import "../styles/AdminAcc.css";
// import { LuUserSquare2 } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import UsersManage from "../components/UsersManage";
import ProductSetting from "../components/ProductSetting";
import axios from "axios";
import { FaTrash } from "react-icons/fa6";
import StripeContainer from "../components/StripeContainer";

function Account({ onlogout }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [accountData, setAccountData] = useState();
  let [account, setAccount] = useState("account");
  let [test, setTest] = useState(false);
  let [role] = useState(localStorage.getItem("acc"));
  let [componentShow, setComponentShow] = useState("account-set");
  let [total, setTotal] = useState(0);
  let [prodCount, setProdCount] = useState(0);
  let [prodDeletId, SetProdDeletId] = useState({});
  let [buyShow, setBuyShow] = useState(false);
  let tt = 0;
  let pcount = 0;

  useEffect(() => {
    axios
      .get(`/api/account/${id}`)
      .then((response) => {
        setAccountData(response.data);
        if (accountData.cart) {
          accountData.cart.product.map((pr) => ((tt += pr.price), pcount++));
          setTotal(tt);
          setProdCount(pcount);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setTest(true);
    }, 700);
    if (accountData && accountData.cart) {
      SetProdDeletId({ ...prodDeletId, id: accountData.cart._id });
    }
  }, [id, accountData]);

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

  const deletItem = () => {
    axios
      .put(
        `/api/deletitemcart`,
        prodDeletId
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <IoHome size={"3.5vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divtwo storebt" onClick={() => storehandle()}>
        {account === "account" || account === "ACOH" ? (
          <MdLocalGroceryStore size={"3.5vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav className="divthree">
        {account === "ACOS" || account === "ACOH" ? (
          <FaUser
            size={"2.7vw"}
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
                {test === true && accountData ? (
                  <div>
                    <div className="user-admin-tag">
                      <div>
                        <FaUser size={"2.7vw"} color="#F4EEE0" />
                      </div>
                      <span>
                        <h1 style={{ textTransform: "uppercase" }}>
                          {accountData.data.username}
                        </h1>
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
                          {/* <h3>Log out</h3> */}
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
                  <div style={{ width: "100%" }}>
                    {accountData ? (
                      <div className="user-container">
                        {/* <div className="user-tag-container">
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
                        </div> */}
                        <div
                          className="cart"
                          style={{
                            margin: "0",
                            height: "100vh",
                            padding: "0px 0px 0px 20px",
                          }}
                        >
                          <div className="cart-container">
                            {accountData.cart ? (
                              accountData.cart.product.map((elt) => (
                                <div className="cart-product">
                                  <img src={elt.image} alt="" />
                                  <div className="cart-product-info">
                                    <h1>{elt.name}</h1>
                                    <div
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        paddingRight: "20px",
                                      }}
                                    >
                                      <h1>{elt.price} $</h1>
                                      <FaTrash
                                        size={"1.5vw"}
                                        color="red"
                                        onClick={() => {
                                          SetProdDeletId({
                                            ...prodDeletId,
                                            prodId: elt._id,
                                          });
                                          deletItem();
                                        }}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </div>
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
                          <div
                            className="facture-container"
                            style={{ paddingTop: "20px" }}
                          >
                            <div className="facture">
                              <div
                                className="facture-item"
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0px",
                                  alignItems: "start",
                                }}
                              >
                                <div style={{ display: "flex", gap: "30px" }}>
                                  <h1>{prodCount} Articles :</h1>
                                  <h1>{parseFloat(total).toFixed(2)} $</h1>
                                </div>
                                <div style={{ display: "flex", gap: "30px" }}>
                                  <h1>Livraison :</h1>
                                  <h1>Gratuit</h1>
                                </div>
                              </div>
                              <div className="facture-item">
                                <h1>Total HT :</h1>
                                <h1>{parseFloat(total).toFixed(2)} $</h1>
                              </div>
                            </div>
                            <div
                              class="button-container-2"
                              onClick={() => setBuyShow(!buyShow)}
                            >
                              <span class="mas">Buy Now</span>
                              <button>Buy Now</button>
                            </div>
                            <div style={{ marginTop: "30px" }}>
                              {buyShow ? <StripeContainer /> : <p></p>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <h1></h1>
                    )}
                  </div>
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
                        <FaUser size={"2.7vw"} color="#121212" />
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
                        <CiLogout size={"2.7vw"} />
                      </div>
                    </div>
                    <div className="cart">
                      <div className="cart-container">
                        {accountData.cart &&
                        accountData.cart.product.length > 0 ? (
                          accountData.cart.product.map((elt) => (
                            <div className="cart-product">
                              <img src={elt.image} alt="" />
                              <div className="cart-product-info">
                                <h1>{elt.name}</h1>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingRight: "20px",
                                  }}
                                >
                                  <h1>{elt.price} $</h1>
                                  <FaTrash
                                    size={"1.5vw"}
                                    color="red"
                                    onClick={() => {
                                      SetProdDeletId({
                                        ...prodDeletId,
                                        prodId: elt._id,
                                      });
                                      deletItem();
                                    }}
                                    style={{ cursor: "pointer" }}
                                  />
                                </div>
                              </div>
                              {elt.color.map((cl) => (
                                <div style={{ backgroundColor: cl }}></div>
                              ))}
                            </div>
                          ))
                        ) : (
                          <p>No Products in Panie</p>
                        )}
                      </div>
                      <div className="facture-container">
                        <div className="facture">
                          <div
                            className="facture-item"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0px",
                              alignItems: "start",
                            }}
                          >
                            <div style={{ display: "flex", gap: "30px" }}>
                              <h1>{prodCount} Articles :</h1>
                              <h1>{parseFloat(total).toFixed(2)} $</h1>
                            </div>
                            <div style={{ display: "flex", gap: "30px" }}>
                              <h1>Livraison :</h1>
                              <h1>Gratuit</h1>
                            </div>
                          </div>
                          <div className="facture-item">
                            <h1>Total HT :</h1>
                            <h1>{parseFloat(total).toFixed(2)} $</h1>
                          </div>
                        </div>
                        <div
                          class="button-container-2"
                          onClick={() => setBuyShow(!buyShow)}
                        >
                          <span class="mas">Buy Now</span>
                          <button>Buy Now</button>
                        </div>
                        <div style={{ marginTop: "30px" }}>
                          {buyShow ? <StripeContainer /> : <p></p>}
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
