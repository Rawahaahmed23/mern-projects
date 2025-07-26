import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/login";
import Error from "./pages/Error";
import LogOut from "./pages/LogOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/service" element={<><Navbar /><Service /></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
  
        <Route path="*"element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
