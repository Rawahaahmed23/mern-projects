import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './Layout/adminLayout';
import Adminuser from './pages/adminuser';

import Login from './pages/Login';
import SignupPage from './pages/SignupPage';
import Home from './pages/Home'
import Logout from './pages/Logout';
import AdminUpdate from './pages/AdminUbadate';
import AdminAnalytics from './pages/AdminAnalytics';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<SignupPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/logut' element={<Logout />} />
             <Route path="/admin/users/:id/edit" element={<AdminUpdate />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<Adminuser />} />
          <Route path="ubd" element={<AdminAnalytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
