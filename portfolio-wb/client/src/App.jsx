import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/navbar";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/register";
import Login from "./pages/login";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/service" element={<><Navbar /><Service /></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
        <Route path="*"element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
