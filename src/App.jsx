import React from 'react';

//react router
import { Route, Routes } from 'react-router-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//css custom
import './App.css';

//components
import Header from './Header';
import Empresa from './Empresa';
import Lojas from './Lojas';
import LisboaLoja from './LisboaLoja';
import PortoLoja from './PortoLoja';
import CoimbraLoja from './CoimbraLoja';

const App = () => {
  return (
    <>
      <Header />
      <hr />
      <main>
        <Routes>
          <Route path='/' element={ <Empresa />}/>
          <Route path='/lojas/*' element={ <Lojas /> }>
            <Route path='lisboa' element={ <LisboaLoja />} />
            <Route path='porto' element={ <PortoLoja />} />
            <Route path='coimbra' element={ <CoimbraLoja />} />
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
