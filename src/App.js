import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
