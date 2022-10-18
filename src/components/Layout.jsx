import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/' >home</Link></li>
          <li><Link to='/about' >about</Link></li>
          <li><Link to='/services' >services</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout
