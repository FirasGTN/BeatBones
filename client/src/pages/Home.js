import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  let [home, setHome] = useState("home");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const storehandle = () => {
    setHome("HCOS");
    setTimeout(() => {
      navigate("/store");
    }, 1000);
  };
  const accounthandle = () => {
    setHome("HCOA");
    setTimeout(() => {
      navigate("/account");
    }, 1000);
  };
  const loginhandle = () => {
    setHome("HCOA");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div
      className={home === "home" ? "home" : home === "HCOS" ? "HCOS" : "HCOA"}
    >
      <nav className="divone">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem dolores accusantium ipsam sint autem ut vitae aut
          possimus mollitia ex cumque, amet, qui saepe? Sapiente, eaque
          temporibus? Necessitatibus, provident assumenda.
        </h1>
      </nav>
      <nav className="divtwo" onClick={() => storehandle()}>
        {home === "home" || home === "HCOA" ? (
          <MdLocalGroceryStore size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav
        className="divthree"
        onClick={() => (token ? accounthandle() : loginhandle())}
      >
        {home === "home" || home === "HCOS" ? (
          <FaUser size={50} color="#27374D" />
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Home;
