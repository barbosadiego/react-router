import React from 'react';

//react router
import { Route, Routes } from 'react-router-dom';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Routes>
        <Route path='/' element={ <Empresa />}/>
        <Route path='/lojas/*' element={ <Lojas /> }>
          <Route path='lisboa' element={ <LisboaLoja />} />
          <Route path='porto' element={ <PortoLoja />} />
          <Route path='lisboa' element={ <LisboaLoja />} />
          <Route path='coimbra' element={ <CoimbraLoja />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
