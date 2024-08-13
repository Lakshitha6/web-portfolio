import './App.css';
import React from 'react'
import Home from './parts/Home';
import About from './parts/About';
import Services from './parts/Services/Services';
import Contact from './parts/Contact/Contact';
import Footer from './parts/Footer';



export default function App() {
  return (

    <div>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}
