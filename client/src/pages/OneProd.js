import React, { useEffect, useState } from "react";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router";
import "../styles/Oneprducts.css";
import axios from "axios";
import "../styles/NewButton.scss";
import ProdFilt from "../components/ALLPRODUCTFILES/ProdFilt";
import { IoIosArrowBack } from "react-icons/io";

function OneProd() {
  const { id } = useParams();
  const [obj, setObj] = useState();
  const arr = [];
  const [isTablet, setTablet] = useState(false);
  let [store, setStore] = useState("SCOP");
  const navigate = useNavigate()

  let backgroundImage = isTablet;

  // const backHandel = ()=> {
    
  // }

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
                        <li>COLOR</li>
                      ) : (
                        console.log("no color")
                      )}
                      {arr}
                    </ul>
                    <div className="foot-container">
                      <div class="button-container-2">
                        <span class="mas">Buy Now</span>
                        <button>Buy Now</button>
                      </div>
                      <div class="button-container-2">
                        <span class="mas">Add To Cart</span>
                        <button>Add To Cart</button>
                      </div>
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
