import "./App.css";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import Oneprducts from "./components/Oneprducts";
import Store from "./pages/Store";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
// import { getData } from "./redux/action";
// import { useDispatch } from "react-redux";
import Account from "./pages/Account";
import { useDispatch } from "react-redux";
import { getData } from "./redux/action";
import OneProd from "./pages/OneProd";
import ConnexionRoutes from "./routes/ConnexionRoutes";

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
      {role === "u" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/:id" element={<Account onlogout={logout} />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<OneProd />} />
          {/* <Route path="/store/paiment" element={<StripeContainer />} /> */}
        </Routes>
      ) : role == "b" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/:id" element={<Account onlogout={logout} />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<OneProd />} />
          {/* <Route path="/store/paiment" element={<StripeContainer />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<OneProd />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/account/:id" element={<Account />} /> */}
        </Routes>
      )}
    </div>
  );
}

export default App;
