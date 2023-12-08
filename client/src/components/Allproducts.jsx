import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../styles/Allproducts.css";
import { Link, useNavigate } from "react-router-dom";

function Allproducts(props) {
  const article = useSelector((store) => store);
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  const OneproductHandel = (ids) => {
    props.OneProdShow();
    setTimeout(() => {
      navigate(`${ids}`);
    }, 1000);
  };
  useEffect(() => {
    if (article.product !== null && article.product.data.product) {
      setProduct(article.product.data.product);
    }
  }, [article.product]);

  if (article.product === null) {
    return <div>Loading...</div>;
  } else if (product) {
    switch (props.productFilter) {
      case "gaming":
        const gaming = product.filter((itm) => itm.type === "gaming");
        return (
          <div className="car-container">
            {gaming.map((art) => (
              <div className="card" key={art.id}>
                <div
                  className="link-prod"
                  onClick={() => {
                    OneproductHandel(art._id);
                  }}
                >
                  <figure>
                    <img src={art.image} alt="" />
                    <h1 className="prod prodname">{art.name}</h1>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        );
      case "headphone":
        const headphone = product.filter((itm) => itm.type === "headphone");
        return (
          <div className="car-container">
            {headphone.map((art) => (
              <div className="card" key={art.id}>
                <div
                  className="link-prod"
                  onClick={() => {
                    OneproductHandel(art._id);
                  }}
                >
                  <figure>
                    <img src={art.image} alt="" />
                    <h1 className="prod prodname">{art.name}</h1>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        );
      case "earbuds":
        const earbuds = product.filter((itm) => itm.type === "earbuds");
        return (
          <div className="car-container">
            {earbuds.map((art) => (
              <div className="card" key={art.id}>
                <div
                  className="link-prod"
                  onClick={() => {
                    OneproductHandel(art._id);
                  }}
                >
                  <figure>
                    <img src={art.image} alt="" />
                    <h1 className="prod prodname">{art.name}</h1>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        );
      case "speaker":
        const speakers = product.filter((itm) => itm.type === "speaker");
        return (
          <div className="car-container">
            {speakers.map((art) => (
              <div className="card" key={art.id}>
                <div
                  className="link-prod"
                  onClick={() => {
                    OneproductHandel(art._id);
                  }}
                >
                  <figure>
                    <img src={art.image} alt="" />
                    <h1 className="prod prodname">{art.name}</h1>
                  </figure>
                </div>
              </div>
            ))}
          </div>
        );
    }
    return (
      <div className="car-container">
        {product.map((art) => (
          <div className="card" key={art.id}>
            <div
              className="link-prod"
              onClick={() => {
                OneproductHandel(art.name);
              }}
            >
              <figure>
                <img src={art.image} alt="" />
                <h1 className="prod prodname">{art.name}</h1>
              </figure>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Allproducts;
