import "./App.css";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Store from "./pages/Store";
// import { getData } from "./redux/action";
// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import Account from "./pages/Account";
import OneProd from "./pages/OneProd";
import Search from "./pages/Search";
import { getData } from "./redux/action";
import AccountRoutes from "./routes/AccountRoutes";
import ConnexionRoutes from "./routes/ConnexionRoutes";
import ErrorRoute from "./routes/ErrorRoute";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [iserid, setUserid] = useState(localStorage.getItem("id"));
  const [role, setRole] = useState(localStorage.getItem("acc"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  });

  const login = () => {
    setToken(localStorage.getItem("token"));
    setUserid(localStorage.getItem("id"));
    setRole(localStorage.getItem("acc"));
  };
  const logout = () => {
    setToken();
    setUserid();
    setRole();
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // });
  return (
    <div className="App">

      <Routes>
        <Route
          path="/login"
          element={
            <ConnexionRoutes>
              <Login onLogin={login} />
            </ConnexionRoutes>
          }
        />
        <Route
          path="/account/:id"
          element={
            <AccountRoutes>
              <Account onlogout={logout} />
            </AccountRoutes>
          }
        />
        <Route
          path="/admin/:id"
          element={
            <AccountRoutes>
              <Account onlogout={logout} />
            </AccountRoutes>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/search/:search" element={<Search />} />
        <Route path="/store/:id" element={<OneProd />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
    </div>
  );
}

export default App;
