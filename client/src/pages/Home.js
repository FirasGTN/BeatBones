import React, { useState } from "react";
import { useNavigate } from "react-router";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  let [home, setHome] = useState("home");
  const [token, ] = useState(localStorage.getItem("token"));
  const [userid, ] = useState(localStorage.getItem("id"));
  const [role, ] = useState(localStorage.getItem("acc"));
  const art = useSelector((art)=>art)
  console.log(art)

  const storehandle = () => {
    setHome("HCOS");
    setTimeout(() => {
      navigate("/store");
    }, 900);
  };
  const accounthandle = () => {
    setHome("HCOA");
    if (role === "u") {
      setTimeout(() => {
        navigate(`/account/${userid}`);
      }, 900);
      
    }else{
      setTimeout(() => {
        navigate(`/admin/${userid}`);
      }, 900);
    }
  };
  const loginhandle = () => {
    setHome("HCOA");
    setTimeout(() => {
      navigate("/login");
    }, 900);
  };
  return (
    <div
      className={home === "home" ? "home" : home === "HCOS" ? "HCOS" : "HCOA"}
    >
      <nav className="divone">
        {home === "HCOA" || home === "HCOS" ? (
          <IoHome size={50} color="#F4EEE0" className="icons-effect"/>
        ) : (
          <p></p>
        )}
        <div className="remove-effect">
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem dolores accusantium ipsam sint autem ut vitae aut
            possimus mollitia ex cumque, amet, qui saepe? Sapiente, eaque
            temporibus? Necessitatibus, provident assumenda.
          </h1>
        </div>
      </nav>
      <nav className="divtwo" onClick={() => storehandle()}>
        {home === "home" || home === "HCOA" ? (
          <MdLocalGroceryStore size={50} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav
        className="divthree"
        onClick={() => (token ? accounthandle() : loginhandle())}
      >
        {home === "home" || home === "HCOS" ? (
          <FaUser size={45} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Home;
