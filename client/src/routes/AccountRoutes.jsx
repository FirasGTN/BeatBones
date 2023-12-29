import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function AccountRoutes({children}) {
  const navigate = useNavigate();
  let role = localStorage.getItem("acc");
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate(`/login`);
    }
  });

  if (token && role) {
    return <> {children} </>;
  }
}

export default AccountRoutes;
