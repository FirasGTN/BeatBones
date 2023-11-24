import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../styles/Allproducts.css";
import { Link } from "react-router-dom";

function Allproducts() {
  const article = useSelector((store) => store);
  const [product, setProduct] = useState();

  useEffect(() => {
    if (article.product !== null && article.product.data.product) {
      setProduct(article.product.data.product);
    }
  }, [article.product]); 

  if (article.product === null) {
    return <div>Loading...</div>;
  } else if (product) {
    return (
      <div className="car-container">
        {product.map((art) => (
          <div className="card" key={art.id}>
            <Link to={`/store/${art.id}`}>
              <figure>
                <img src={art.image} alt="" />
                <h1 className="prod prodname">{art.name}</h1>
              </figure>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Allproducts;
