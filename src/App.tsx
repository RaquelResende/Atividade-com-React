import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './componente/estaticos/navbar/Navbar';
import Footer from './componente/estaticos/Footer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';


function App() {
  return (
    <>

    <Router>
   <Navbar/>

 <Routes>
  <Route path= '/home' element={ <Home/>}/>
  <Route path = '/' element= {<Login/>}/>
  <Route path = 'login' element= {<Login/>}/>

 </Routes>
  <Footer/>

    </Router>
    
  
    </>

  );
}

export default App;
