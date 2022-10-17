import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
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
    </header>
  )
};

export default Header;
