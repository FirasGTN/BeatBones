import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
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

  const login = () => {
    setToken(localStorage.getItem("token"));
  };

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData());
  // });
  return (
    <div className="App">
      {/* <Navbar token={token} /> */}
      {!token ? (
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
          <Route path="/account" element={<Account />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:id" element={<Oneprducts />} />
          <Route path="/store/earbuds" element={<Earbuds />} />
          <Route path="/store/gaming" element={<Gaming />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/store/speakers" element={<Speakers />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
