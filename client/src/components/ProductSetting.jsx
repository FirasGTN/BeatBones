import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function ProductSetting() {
  const dispatch = useDispatch();
  const article = useSelector((store) => store);
  const [product, setProduct] = useState();

  useEffect(() => {
    dispatch(getData());
    if (article.product !== null && article.product.data.product) {
      setProduct(article.product.data.product);
    }
  }, [article.product]);

  if (article.product === null) {
    return <div>Loading...</div>;
  } else if (product) {
    return (
      <div>
        {/* {product.map((prod) => {
        })} */}
        <MDBTable responsive>
          <MDBTableHead>firas</MDBTableHead>
          <MDBTableBody>ahhhf</MDBTableBody>
          <MDBTableHead>firas</MDBTableHead>
          <MDBTableBody>ahhhf</MDBTableBody>
          <MDBTableHead>firas</MDBTableHead>
          <MDBTableBody>ahhhf</MDBTableBody>
          <MDBTableHead>firas</MDBTableHead>
          <MDBTableBody>ahhhf</MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

export default ProductSetting;
