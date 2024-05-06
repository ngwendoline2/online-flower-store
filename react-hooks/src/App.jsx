
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThankyouPage from './pages/ThankyouPage';
import Nav from './components/Nav';
import Flower from './components/Flower';
import Pot from './components/Pot';
import { useEffect, useState } from 'react';
import Axios from "axios";
import 


function App() {
  return (
    <>
    <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
      </>
  );
}

const Flowers = ( )=> {
  const [data,setData]=useState("");

  const getData=async()=>{
    const response=await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  }
  useEffect(()=>{
    getData()
  },[]);

  return (
    <div>{data}</div>
  )
}

export default App;