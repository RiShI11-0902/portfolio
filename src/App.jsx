import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Projects from './components/Projects';
import Certificates from './components/Certificates';
function App() {

  //  useGSAP(()=>{
  //   gsap.to(".container",{

  //   })
  //  },[])





  return (
    <>

      <Router>
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/certificates' element={<Certificates/>} />

        </Routes>
      </Router>

    </>
  )
}

export default App
