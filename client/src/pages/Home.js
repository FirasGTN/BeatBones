import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import imageHoliday from "../pic/imageHoliday.jpeg";
import imageTmnt from "../pic/imageTmnt.jpeg";

function Home() {
  const navigate = useNavigate();
  let [home, setHome] = useState("home");
  const [token] = useState(localStorage.getItem("token"));
  const [userid] = useState(localStorage.getItem("id"));
  const [role] = useState(localStorage.getItem("acc"));
  const art = useSelector((art) => art.product?.data.product);
  const [allType, setAllType] = useState();
  useEffect(() => {
    let arre = [];
    const encounteredTypes = {};
    if (art) {
      art.forEach((e) => {
        if (!encounteredTypes[e.type]) {
          arre.push(e);
          encounteredTypes[e.type] = true;
        }
      });
      console.log(arre);
      if (arre.length > 0) {
        setAllType(arre);
      }
    }
  }, [art]);

  const storehandle = () => {
    setHome("HCOS");
    setTimeout(() => {
      navigate("/store");
    }, 900);
  };
  const typehandle = (type) => {
    setHome("HCOS");
    setTimeout(() => {
      navigate(`search/${type}`);
    }, 900);
  };
  const accounthandle = () => {
    setHome("HCOA");
    if (role === "u") {
      setTimeout(() => {
        navigate(`/account/${userid}`);
      }, 900);
    } else {
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
          <IoHome size={"3.5vw"} color="#F4EEE0" className="icons-effect" />
        ) : (
          <p style={{ display: "none" }}></p>
        )}
        <div className="remove-effect">
          <Navbar homeNavbar=" " />
          <div className="h-secOne">
            <img src={imageHoliday} alt="holiday" />
            <div>
              <img
                src="https://images.prismic.io/skullcandy/1a187ef9-dd02-45c9-a743-f96ac7919dbf_2+%287%29.jpg?auto=compress,format&rect=0,0,800,800&w=800&h=800"
                alt="acid snow"
              />
              <img
                src="https://images.prismic.io/skullcandy/f6e2c104-a63a-4384-8213-3ae35a02f6b6_3+%2811%29.jpg?auto=compress,format&rect=0,0,800,800&w=800&h=800"
                alt="droop in"
              />
            </div>
          </div>
          <div className="h-secTwo">
            {allType
              ? allType.map((te) => (
                  <div
                    key={te._id}
                    className="h-secTwo-item"
                    onClick={() => typehandle(te.type)}
                  >
                    <img src={te.image} alt="" />
                    <h2>{te.type}</h2>
                  </div>
                ))
              : console.log("test")}
          </div>
          <div className="h-secThree">
            <img
              src={imageTmnt}
              alt=""
            />
            <img
              src="https://images.prismic.io/skullcandy/fd675176-b36b-4971-8007-86a30f4880ec_Image20231117115642.jpg?auto=compress,format"
              alt=""
            />
          </div>
        </div>
      </nav>
      <nav className="divtwo" onClick={() => storehandle()}>
        {home === "home" || home === "HCOA" ? (
          <MdLocalGroceryStore size={"3.5vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
      <nav
        className="divthree"
        onClick={() => (token ? accounthandle() : loginhandle())}
      >
        {home === "home" || home === "HCOS" ? (
          <FaUser size={"2.7vw"} color="#F4EEE0" />
        ) : (
          <p></p>
        )}
      </nav>
    </div>
  );
}

export default Home;
