import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Oneprducts from './components/Oneprducts';
import Store from './components/Store';
import { Route,Routes } from 'react-router';


function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/store" element={<Store/>} />
       <Route path="/store/:id" element={<Oneprducts/>} />
     </Routes>
    </div>
  );
}

export default App;
