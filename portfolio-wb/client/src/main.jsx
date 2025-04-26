import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';
import { Authprovider } from './store/auth.jsx'
;




createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Authprovider>
    <App />
     
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>

   </Authprovider >
  </StrictMode>,
)
