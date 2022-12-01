import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './componente/estaticos/navbar/Navbar';
import Footer from './componente/estaticos/Footer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './componente/postagens/listaPostagem/ListaPostagem';
import ListaTema from './componente/postagens/temas/listaTema/ListaTema';


function App() {
  return (
    <>

    <Router>
   <Navbar/>

 <Routes>
  <Route path= '/home' element={ <Home/>}/>
  <Route path = '/' element= {<Login/>}/>
  <Route path = '/login' element= {<Login/>}/>
  <Route path = '/cadastrar' element= {<CadastroUsuario/>}/>
  <Route path = '/temas' element= {<ListaTema/>}/>
  <Route path = '/postagens' element= {<ListaPostagem/>}/>

 </Routes>
  <Footer/>

    </Router>
    
  
    </>

  );
}

export default App;
