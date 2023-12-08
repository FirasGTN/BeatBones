import React from "react";
import { Navigate } from "react-router";
function ConnexionRoutes({ children }) {
  let role = localStorage.getItem("acc");
  let token = localStorage.get("token");
  if (!token && !role) {
    return <> {children} </>;
  } else if (token && role === "u") {
    <Navigate to="/account" />;
  }
}

export default ConnexionRoutes;
