import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Contacts from './components/Contacts';
import Home from './components/Home';
import Services from './components/Services';
import Erro from './components/Erro';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import AreaReservada from './components/AreaReservada';

const App = () => {

  const [logado, setLogado] = useState(false);

  return (
    <>
      <Header setLogado={setLogado}/>
      {logado ? 'usuário logado' : 'usuário não logado'}
      <main>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/services' element={ <Services />}/>
          <Route path='/contacts' element={ <Contacts />}/>
          <Route path='/about' element={ <About />} />
          
          <Route 
            path='/area_reservada' 
            element={ logado ? <AreaReservada /> : <Navigate to='/' /> } 
          />

          <Route path='*' element={ <Erro />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
