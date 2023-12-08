import React, { useEffect, useState } from "react";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router";
import "../styles/Oneprducts.css";
import axios from "axios";
import "../styles/NewButton.scss";
import ProdFilt from "../components/ALLPRODUCTFILES/ProdFilt";
import { IoIosArrowBack } from "react-icons/io";
import Alert from "react-bootstrap/Alert";
import StripeContainer from "../components/StripeContainer";

function OneProd() {
  const { id } = useParams();
  const [obj, setObj] = useState();
  const arr = [];
  const [isTablet, setTablet] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  let [store, setStore] = useState("SCOP");
  let [buyShow, setBuyShow] = useState(false);
  const navigate = useNavigate();
  const userid = localStorage.getItem("id");

  let backgroundImage = isTablet;

  const addToCart = () => {
    axios
      .post(`/additemcart`, {
        userid: userid,
        product: obj,
      })
      .then((response) => {
        setAlertShow(true);
        setTimeout(() => {
          setAlertShow(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const mediaMatch = window.matchMedia("(max-width: 1000px)");
    const handler = (e) => setTablet(e.matches);
    mediaMatch.addListener(handler);
    axios
      .get(`/store/${id}`)
      .then((response) => {
        setObj(response.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
    setStore("SCOPT");
    return () => mediaMatch.removeListener(handler);
  }, []);

  if (obj) {
    backgroundImage = isTablet ? obj.tbgimage : obj.bgimage;
    for (let i = 0; i < obj.colorCount; i++) {
      // Add onclick to change the photo
      arr.push(
        <button
          style={{ backgroundColor: obj.color[i] }}
          className="color"
        ></button>
      );
    }
    return (
      <div className={store === "SCOP" ? "SCOP" : "SCOPT"}>
        <nav className="divone">
          <p></p>
        </nav>
        <nav className="divtwo">
          <div>
            <div className="teststore remove-effect">
              {alertShow === true ? (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#4BB543",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0px",
                      width: "30%",
                      height: "30px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <h1 style={{ fontSize: "1vw", color: "white" }}>
                      This product is added with
                    </h1>
                  </div>
                </div>
              ) : (
                <p style={{ position: "absolute" }}></p>
              )}
              <IoIosArrowBack
                color="white"
                size={60}
                className="back-icon"
                onClick={() => navigate("/store")}
              />
              <div class="cardt">
                <div
                  className="card-item"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                ></div>
                <div class="product-info">
                  <div className="product-content">
                    <div class="details">
                      <h3>{obj.name}</h3>
                    </div>
                    <div>
                      <h4>
                        <FontAwesomeIcon icon={faDollar} className="i dollar" />
                        {obj.price}
                      </h4>
                      {/* <h4 class="dis">
                      <FontAwesomeIcon icon={faDollar} />
                      {obj.price}
                    </h4> */}
                    </div>
                    <ul className="color-container">
                      {obj.colorCount >= 1 ? (
                        <li>COLOR : </li>
                      ) : (
                        console.log("no color")
                      )}
                      <div className="color-list">{arr}</div>
                    </ul>
                    <div className="foot-container">
                      <div
                        class="button-container-2"
                        onClick={() => setBuyShow(!buyShow)}
                      >
                        <span class="mas">Buy Now</span>
                        <button>Buy Now</button>
                      </div>
                      <div
                        class="button-container-2"
                        onClick={() => addToCart()}
                      >
                        <span class="mas">Add To Cart</span>
                        <button>Add To Cart</button>
                      </div>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                      {buyShow ? <StripeContainer /> : <p></p>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="oneProd-secTwo">
                <ProdFilt id={id} />
              </div>
            </div>
          </div>
        </nav>
        <nav className="divthree">
          <p></p>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="SCOP">
        <nav className="divone">
          <p></p>
        </nav>
        <nav className="divtwo">
          <p></p>
        </nav>
        <nav className="divthree">
          <p></p>
        </nav>
      </div>
    );
  }
}
export default OneProd;
