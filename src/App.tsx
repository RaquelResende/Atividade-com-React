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
import CadastroTema from './componente/postagens/temas/cadastroTema/CadatrosTema';
import DeletarPostagem from './componente/postagens/deletarPostagem/DeletarPostagem';
import CadastroPost from './componente/postagens/cadastroPost/CadastroPost';
import DeletarTema from './componente/postagens/temas/deletarTema/DeletarTema';
import store from './store/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <ToastContainer/>

    <Router>

      
  <Navbar/>

 <Routes>
  
  <Route path= '/home' element={ <Home/>}/>
  <Route path = '/' element= {<Login/>}/>
  <Route path = '/login' element= {<Login/>}/>
  <Route path = '/cadastrar' element= {<CadastroUsuario/>}/>
  <Route path = '/temas' element= {<ListaTema/>}/>
  <Route path = '/posts' element= {<ListaPostagem/>}/>
  <Route path = '/formularioTema' element= {<CadastroTema/>}/>
  <Route path = '/formularioTema/:id' element= {<CadastroTema/>}/>
  <Route path = '/formularioPostagem/' element= {<CadastroPost/>}/>
  <Route path = '/formularioPostagem/:id' element= {<CadastroPost/>}/>
  <Route path = '/deletarTema/:id' element= {<DeletarTema/>}/>
  <Route path = '/deletarPostagem/:id' element= {<DeletarPostagem/>}/>

 </Routes>


  <Footer/>

    </Router>
    </Provider> 
  
    </>

  );
}

export default App;
