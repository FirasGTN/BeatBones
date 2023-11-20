import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Oneprducts from './components/Oneprducts';
import Store from './pages/Store';
import { Route,Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/store" element={<Store/>} />
       <Route path="/store/:id" element={<Oneprducts/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
