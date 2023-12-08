import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import "../styles/ProdSettings.css";
import axios from "axios";

function ProductSetting() {
  const dispatch = useDispatch();
  const article = useSelector((store) => store);
  const [product, setProduct] = useState();
  const [newProduct, SetNewProduct] = useState({});
  const [colorShow, setColorShow] = useState();
  const [colorShowTwo, setColorShowtwo] = useState();
  const [updateProduct, SetUpdateProduct] = useState({});
  const [deleteProductId, SetDeleteProduct] = useState();

  useEffect(() => {
    dispatch(getData());
    if (article.product !== null && article.product.data.product) {
      setProduct(article.product.data.product);
    }
  }, [article.product]);

  const renderColorInputs = () => {
    const colorInputs = [];
    for (let i = 0; i < colorShow; i++) {
      colorInputs.push(
        <div
          key={i}
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <h1>{`Color ${i + 1} :`}</h1>
          <input
            type="color"
            onChange={(e) => {
              const colors = newProduct.colors || [];
              colors[i] = e.target.value;
              SetNewProduct({ ...newProduct, colors });
            }}
          />
        </div>
      );
    }
    return colorInputs;
  };
  const renderColorInputsTwo = () => {
    const colorInputstwo = [];
    for (let i = 0; i < colorShowTwo; i++) {
      colorInputstwo.push(
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          <h1 style={{ width: "fit-content" }}>{`Color ${i + 1} :`}</h1>
          <input
            type="color"
            onChange={(e) => {
              const colorstwo = updateProduct.colors || [];
              colorstwo[i] = e.target.value;
              SetUpdateProduct({ ...updateProduct, colorstwo });
            }}
          />
        </div>
      );
    }
    return colorInputstwo;
  };

  const addProduct = () => {
    axios
      .post(
        "/account/addproduct",
        newProduct
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateProductFn = () => {
    axios
      .put(
        "/updateProduct",
        updateProduct
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProductFn = () => {
    axios
      .delete(
        `/deleteProduct/${deleteProductId}`
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (article.product === null) {
    return <div>Loading...</div>;
  } else if (product) {
    return (
      <div className="prod-setting">
        <div className="prod-s add-prod">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <h2>Add product</h2>
          </div>
          <div className="prod-items">
            <h1>Product Name :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetNewProduct({ ...newProduct, name: e.target.value });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product price :</h1>
            <input
              type="number"
              onChange={(e) => {
                SetNewProduct({ ...newProduct, price: Number(e.target.value) });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product type :</h1>
            <select
              name="type"
              onChange={(e) => {
                SetNewProduct({ ...newProduct, type: e.target.value });
              }}
            >
              <option selected>Select the type of Product</option>
              <option value="headphone">headphone</option>
              <option value="gaming">gaming</option>
              <option value="earbuds">earbuds</option>
              <option value="speaker">speaker</option>
            </select>
          </div>
          <div className="prod-items">
            <h1>Product image URL :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetNewProduct({ ...newProduct, image: e.target.value });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product Background image URL :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetNewProduct({ ...newProduct, bgimage: e.target.value });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product Background image URL (support tablet and phone) :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetNewProduct({ ...newProduct, tbgimage: e.target.value });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product Color Count :</h1>
            <input
              type="number"
              onChange={(e) => {
                SetNewProduct({
                  ...newProduct,
                  colorCount: Number(e.target.value),
                });
                setColorShow(Number(e.target.value));
              }}
            />
          </div>
          <div className="prod-items">
            {colorShow ? (
              <h1>Product Colors :</h1>
            ) : (
              <p style={{ display: "none" }}></p>
            )}
            <div style={{ display: "flex", gap: "20px" }}>
              {renderColorInputs()}
            </div>
          </div>
          <div class="button-container-2" onClick={() => addProduct()}>
            <span class="mas">Add Product</span>
            <button>Add Product</button>
          </div>
        </div>
        <div style={{ width: "100%", height: "1px", backgroundColor: "black" }}>
          <p></p>
        </div>
        <div className="prod-s update-prod">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <h2>Update product</h2>
          </div>
          <div className="prod-items">
            <h1>Select the product</h1>
            <select
              onChange={(e) => {
                SetUpdateProduct({ ...updateProduct, id: e.target.value });
              }}
            >
              <option selected>Select the product</option>
              {product.map((elt) => (
                <option value={elt.name}>{elt.name}</option>
              ))}
            </select>
          </div>
          <div className="prod-items">
            <h1>Product Name :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetUpdateProduct({ ...updateProduct, name: e.target.value });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product price :</h1>
            <input
              type="number"
              onChange={(e) => {
                SetUpdateProduct({
                  ...updateProduct,
                  price: Number(e.target.value),
                });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product type :</h1>
            <select
              name="type"
              onChange={(e) => {
                SetUpdateProduct({ ...updateProduct, type: e.target.value });
              }}
            >
              <option selected>Select the type of Product</option>
              <option value="headphone">headphone</option>
              <option value="gaming">gaming</option>
              <option value="earbuds">earbuds</option>
              <option value="speaker">speaker</option>
            </select>
          </div>
          <div className="prod-items">
            <h1>Product image URL :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetUpdateProduct({ ...updateProduct, image: e.target.value });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product Background image URL :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetUpdateProduct({ ...updateProduct, bgimage: e.target.value });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product Background image URL (support tablet and phone) :</h1>
            <input
              type="text"
              onChange={(e) => {
                SetUpdateProduct({
                  ...updateProduct,
                  tbgimage: e.target.value,
                });
              }}
            />
          </div>
          <div className="prod-items">
            <h1>Product Color Count :</h1>
            <input
              type="number"
              onChange={(e) => {
                SetUpdateProduct({
                  ...updateProduct,
                  colorCount: Number(e.target.value),
                });
                setColorShowtwo(Number(e.target.value));
              }}
            />
          </div>
          <div className="prod-items">
            {colorShowTwo ? (
              <h1>Product Colors :</h1>
            ) : (
              <p style={{ display: "none" }}></p>
            )}
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
                overflow: "scroll",
              }}
            >
              {renderColorInputsTwo()}
            </div>
          </div>
          <div class="button-container-2" onClick={() => updateProductFn()}>
            <span class="mas">Update Product</span>
            <button>Update Product</button>
          </div>
        </div>
        <div style={{ width: "100%", height: "1px", backgroundColor: "black" }}>
          <p></p>
        </div>
        <div className="prod-s delet-prod">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0px",
            }}
          >
            <h2>Delete product</h2>
          </div>
          <div className="prod-items">
            <h1>Select the product</h1>

            <select
              onChange={(e) => {
                SetDeleteProduct(e.target.value);
              }}
            >
              <option selected>Select the product</option>
              {product.map((elt) => (
                <option value={elt.name}>{elt.name}</option>
              ))}
            </select>
          </div>
          <div class="button-container-2" onClick={() => deleteProductFn()}>
            <span class="mas">Delete Product</span>
            <button>Delete Product</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSetting;
