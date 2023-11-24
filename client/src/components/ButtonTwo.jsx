import React from "react";
import "../styles/Button.css";

function ButtonTwo(props) {
  return (
    <button
      className="bt"
          >
      <p className="tag-btn">{props.name}</p>
    </button>
  );
}

export default ButtonTwo;
