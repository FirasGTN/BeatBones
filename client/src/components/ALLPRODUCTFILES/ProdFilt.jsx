import React from "react";
import Prod1 from "./Prod1";
import Prod2 from "./Prod2";
import Prod3 from "./Prod3";
import Prod4 from "./Prod4";
import Prod5 from "./Prod5";
import Prod6 from "./Prod6";
import Prod7 from "./Prod7";
import Prod8 from "./Prod8";
import Prod9 from "./Prod9";
import Prod10 from "./Prod10";
import Prod11 from "./Prod11";
import Prod12 from "./Prod12";
import Prod13 from "./Prod13";

function ProdFilt(props) {
  switch (props.id) {
    case "Crusher® ANC 2 Sensory Bass Headphones with Active Noise Canceling":
      return <Prod1 />;
    case "Acid Snow Camo Crusher® ANC 2 Sensory Bass Headphones with Active Noise Canceling":
      return <Prod2 />;
    case "PLYR® Multi-Platform Wireless Gaming Headset":
      return <Prod3 />;
    case "TMNT PLYR® Multi-Platform Wireless Gaming Headset":
      return <Prod4 />;
    case "Street Fighter PLYR® Multi-Platform Wireless Gaming Headset":
      return <Prod5 />;
    case "Doritos SLYR® Multi-Platform Wired Gaming Headset":
      return <Prod6 />;
    case "SLYR® Pro Multi-Platform Wired Gaming Headset":
      return <Prod7 />;
    case "Grind® True Wireless Earbuds":
      return <Prod8/>;
    case "TMNT Push® Active True Wireless Earbuds":
      return <Prod9/>
    case "Rail® True Wireless Earbuds":
      return <Prod10/>;
    case "Barrel™ Wireless Bluetooth® Speaker":
      return <Prod11/>;
    case "Terrain™ XL Wireless Bluetooth® Speaker":
      return <Prod12/>;
    case "Kilo™ Wireless Bluetooth® Speaker":
      return <Prod13/>;
  }
}

export default ProdFilt;
