import React from 'react';
import { Outlet } from 'react-router-dom';

const Lojas = (props) => {
  return (
    <>
      <h1>As nossas lojas em todo o país.</h1>
      <Outlet />
    </>
  );
};

export default Lojas;
