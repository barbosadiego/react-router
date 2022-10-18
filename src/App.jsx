import React from 'react';

//router
import { Routes, Route } from 'react-router-dom';

//components
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Layout from './components/Layout';

const App = () => {
  return (
    <>
      <h2>Route Index</h2>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> }/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/services' element={ <Services /> }/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
