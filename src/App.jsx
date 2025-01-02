import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Animation from './components/Animation';
function App() {
  return (
    <>
      <Router>
        <Animation />
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
