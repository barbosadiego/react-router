import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Contacts from './components/Contacts';
import Home from './components/Home';
import Services from './components/Services';
import Erro from './components/Erro';
import About from './components/About';

const App = () => {
  return (
    <>
      <h1 className='text-center my-3'>React Router</h1>
      <nav className='container'>
        <div className="row">
          <div className="col text-center">
            <Link className='btn btn-primary me-3' to='/'>Home</Link>
            <Link className='btn btn-primary me-3' to='/services'>Services</Link>
            <Link className='btn btn-primary me-3' to='/contacts'>Contacts</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/services' element={ <Services />}/>
        <Route path='/contacts' element={ <Contacts />}/>
        <Route path='/about' element={ <About />} />
        <Route path='*' element={ <Erro />} />
      </Routes>
    </>
  );
};

export default App;
