import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Services = () => {
  return (
    <section className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8 card p-3 bg-light">
          <h2>Services</h2>
          <p>
            Nemo praesentium voluptas error perspiciatis alias quam cupiditate
            eius vitae illo labore sit cumque id delectus similique molestiae
            magnam eaque deleniti, dolor odit, fugit vero qui. Rem distinctio
            minima fuga?
          </p>

          <ul>
            <li>
              <Link to='service1'>Service1</Link>
            </li>
            <li>
              <Link to='service2'>Service2</Link>
            </li>
            <li>
              <Link to='service3'>Service3</Link>
            </li>
          </ul>
          
          <Routes>
            <Route path='service1' element={ <h3>Serviço 1</h3> }/>
            <Route path='service2' element={ <h3>Serviço 2</h3> }/>
            <Route path='service3' element={ <h3>Serviço 3</h3> }/>
          </Routes>

          <Link className='btn btn-primary' to='/about'>About</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
