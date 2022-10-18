import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Empresa</Link></li>
          <li><Link to='/lojas'>Lojas</Link></li>
          <li><Link to='/lojas/lisboa'>Lisboa</Link></li>
          <li><Link to='/lojas/porto'>Porto</Link></li>
          <li><Link to='/lojas/coimbra'>Coimbra</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
