import './Menu.css';
import React from 'react';

import { Link } from 'react-router-dom';
const Menu = (props) => (
  <aside className='Menu'>
    <nav>
      <ul>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/about'>Inicio</Link>
        </li>
      </ul>
    </nav>
  </aside>
);
export default Menu;
