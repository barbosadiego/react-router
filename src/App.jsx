import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <h1>React Router!</h1>
      <nav>
        <span>
          <Link to="/">HOME</Link>
        </span>{' '}
        <span>
          <Link to="/about">ABOUT</Link>
        </span>{' '}
        <span>
          <Link to="/contact">CONTACT</Link>
        </span>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<h2>home</h2>} />
        <Route path="/about" element={<h2>about</h2>} />
        <Route
          path="/contact"
          element={
            <>
              <h2>contact</h2>
              <nav>
                <Link to="local">local</Link>{' '}
                <Link to="worktime">worktime</Link>{' '}
                <Link to="phone">phone</Link> <Link to="email">email</Link>
              </nav>
              <Outlet />
            </>
          }
        >
          <Route path="local" element={<h3>local</h3>} />
          <Route path="worktime" element={<h3>worktime</h3>} />
          <Route path="phone" element={<h3>phone</h3>} />
          <Route path="email" element={<h3>email</h3>} />
        </Route>
        <Route path="*" element={<h2>page not found</h2>} />
      </Routes>
    </>
  );
};

export default App;
