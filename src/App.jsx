import React from 'react';
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

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/services' element={ <Services />}/>
          <Route path='/contacts' element={ <Contacts />}/>
          <Route path='/about' element={ <About />} />
          <Route path='/outro' element={ <Navigate to='/about'/> }/>
          <Route path='*' element={ <Erro />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
