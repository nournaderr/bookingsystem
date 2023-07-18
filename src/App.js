import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </BrowserRouter>

  );
  
}

export default App;
