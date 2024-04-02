import { useState } from 'react'
import './App.css'
import { Container } from '@mui/material'
import Paper from '@mui/material/Paper';
import Navbar from './components/Navbar';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
