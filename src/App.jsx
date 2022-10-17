import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Contacts from './components/Contacts';
import Home from './components/Home';
import Services from './components/Services';

const App = () => {
  return (
    <BrowserRouter>
      <h1>React Router</h1>
      <nav>
        <Link to='/'>Home</Link> | {' '}
        <Link to='/services'>Services</Link> | {' '}
        <Link to='/contacts'>Contacts</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/services' element={ <Services />}/>
        <Route path='/contacts' element={ <Contacts />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
