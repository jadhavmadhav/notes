import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Login from './Component/Login/Login';
import Registration from './Component/Login/Registration';
import Home from './Component/Home';
import { useSelector } from 'react-redux';
import Header from './Component/header/Header';

function App() {
 
  let isLogin = true
  return (
    <BrowserRouter>
    <div className='maincontainer'> 
    <div className='header'>
      <Header />
    </div>
    <div className='content'>
    <Routes > 
      {
        isLogin?<Route path='/' element={<Home />} /> :<Route path='/' element={<Login />} />

     }
     <Route path='/registration' element={<Registration />} />
    </Routes>
    </div>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
