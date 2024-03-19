import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './home';
import Fotter from './footer';
import About from './about';
import Contact from './contact/contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    
  </>
);
