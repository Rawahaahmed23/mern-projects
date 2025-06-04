import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './Layout/adminLayout';
import Adminuser from './pages/adminuser';
import AdminDashboard from './pages/AdminDashboard'; // Make sure ye import hai
import Login from './pages/Login';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/Singup' element={<SignupPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<Adminuser />} />
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
