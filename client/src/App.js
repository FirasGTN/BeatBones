import "./App.css";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import Oneprducts from "./components/Oneprducts";
import Store from "./pages/Store";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
// import { getData } from "./redux/action";
// import { useDispatch } from "react-redux";
import Earbuds from "./components/filters/Earbuds";
import Gaming from "./components/filters/Gaming";
import Headphones from "./components/filters/Headphones";
import Speakers from "./components/filters/Speakers";
import Account from "./pages/Account";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [iserid, setUserid] = useState(localStorage.getItem("id"));
  const [role,setRole] = useState(localStorage.getItem("acc"));

  const login = () => {
    setToken(localStorage.getItem("token"));
    setUserid(localStorage.getItem("id"));
    setRole(localStorage.getItem("acc"));
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // });
  return (
    <div className="App">
      {/* <Navbar token={token} /> */}
      
      {role === "u" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<Oneprducts />} />
          <Route path="/store/earbuds" element={<Earbuds />} />
          <Route path="/store/gaming" element={<Gaming />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/store/speakers" element={<Speakers />} />
        </Routes>
      ) : role == "b" ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/:id" element={<Account />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<Oneprducts />} />
          <Route path="/store/earbuds" element={<Earbuds />} />
          <Route path="/store/gaming" element={<Gaming />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/store/speakers" element={<Speakers />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<Oneprducts />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/store/earbuds" element={<Earbuds />} />
          <Route path="/store/gaming" element={<Gaming />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/store/speakers" element={<Speakers />} />
          {/* <Route path="/account/:id" element={<Account />} /> */}
        </Routes>
      )}
    </div>
  );
}

export default App;
