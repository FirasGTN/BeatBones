import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ConnexionRoutes({ children }) {
  const navigate = useNavigate();
  let role = localStorage.getItem("acc");
  let token = localStorage.getItem("token");
  let id = localStorage.getItem("id");
  useEffect(() => {
    if (token) {
      navigate(`/account/${id}`);
    }
  });
  if (!token && !role) {
    return <> {children} </>;
  }
}

export default ConnexionRoutes;
