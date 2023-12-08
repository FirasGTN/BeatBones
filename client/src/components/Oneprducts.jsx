// import { faDollar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import "../styles/Oneprducts.css";
// import axios from "axios";
// import "../styles/NewButton.scss";

// function Oneprducts() {
//   const { id } = useParams();
//   console.log(id)
//   const [obj, setObj] = useState();
//   const arr = [];
//   const [isTablet, setTablet] = useState(false);
//   let [store, setStore] = useState("SCOP");
//   const [showItem, setShowItem] = useState(false);

//   let backgroundImage = isTablet;

//   useEffect(() => {
//     const mediaMatch = window.matchMedia("(max-width: 1000px)");
//     const handler = (e) => setTablet(e.matches);
//     mediaMatch.addListener(handler);
//     axios
//       .get(`/store/${id}`)
//       .then((response) => {
//         setObj(response.data.product);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     setStore("SCOPT");
//     return () => mediaMatch.removeListener(handler);
//   }, []);
//   if (obj) {
//     backgroundImage = isTablet ? obj.tbgimage : obj.bgimage;
//     for (let i = 0; i < obj.colorCount; i++) {
//       // Add onclick to change the photo
//       arr.push(
//         <button
//           style={{ backgroundColor: obj.color[i] }}
//           className="color"
//         ></button>
//       );
//     }

//     return (
//       <div className={store === "SCOP" ? "SCOP" : "SCOPT"}>
//         <nav className="divone">
//           <p></p>
//         </nav>
//         <nav className="divtwo">
//           <div className="teststore remove-effect">
//             <div class="cardt">
//               <div
//                 className="card-item"
//                 style={{ backgroundImage: `url(${backgroundImage})` }}
//               ></div>
//               <div class="product-info">
//                 <div className="product-content">
//                   <div class="details">
//                     <h3>{obj.name}</h3>
//                   </div>
//                   <div>
//                     <h4>
//                       <FontAwesomeIcon icon={faDollar} className="i dollar" />
//                       {obj.price}
//                     </h4>
//                     {/* <h4 class="dis">
//                       <FontAwesomeIcon icon={faDollar} />
//                       {obj.price}
//                     </h4> */}
//                   </div>
//                   <ul className="color-container">
//                     {obj.colorCount >= 1 ? (
//                       <li>COLOR</li>
//                     ) : (
//                       console.log("no color")
//                     )}
//                     {arr}
//                   </ul>
//                   <div className="foot-container">
//                     <div class="button-container-2">
//                       <span class="mas">Buy Now</span>
//                       <button>Buy Now</button>
//                     </div>
//                     <div class="button-container-2">
//                       <span class="mas">Add To Cart</span>
//                       <button>Add To Cart</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//         <nav className="divthree">
//           <p></p>
//         </nav>
//       </div>
//     );
//   } else {
//     return (
//       <div className="SCOP">
//         <nav className="divone">
//           <p></p>
//         </nav>
//         <nav className="divtwo">
//           <p></p>
//         </nav>
//         <nav className="divthree">
//           <p></p>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Oneprducts;
