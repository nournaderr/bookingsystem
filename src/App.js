import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import OTP from './Pages/OTP';
import Home from "./Pages/Home";
function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
        </Routes>
      </div>
      </BrowserRouter>

  );
  
}

export default App;
