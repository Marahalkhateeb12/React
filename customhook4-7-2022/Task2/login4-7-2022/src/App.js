import logo from './logo.svg';
import './App.css';
import Nav from "./component/Nav";
import Home from "./component/Home";
import Login from "./component/Login";

import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { userContext } from "./component/userContext";
import { useState, useEffect } from 'react'

function App() {
  const [user] = useState({ username: 'marahalkhateeb12@gmail.com', password: 'marah1234567' });
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <userContext.Provider value={{user, isLoggedIn, setIsLoggedIn, message, setMessage}}>

   <div>
   <Nav />

   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/Login" element={<Login  />} />
   </Routes>
   </div>
   
       
      
   </userContext.Provider>
   </BrowserRouter>
  );
}

export default App;