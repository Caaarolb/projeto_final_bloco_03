import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "../src/pages/Home"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>

      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[69vh] bg-gray-200">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App