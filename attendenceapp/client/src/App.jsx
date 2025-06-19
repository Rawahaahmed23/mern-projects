import { Button } from "./components/ui/button"
import { BrowserRouter,Routes,Route } from 'react-router-dom' // ✅ Correct import
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
     <Routes>
   <Route path="/" element={<Home />} />
     </Routes>
   
    </BrowserRouter>
  )
}

export default App
