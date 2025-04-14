import { Routes, Route } from "react-router-dom";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import AdminPanel from "./components/Admin/AdminPanel";
import FullPage from "./pages/FullPage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/product/:id" element={<FullPage />} />
    </Routes>
  );
}

export default App;
