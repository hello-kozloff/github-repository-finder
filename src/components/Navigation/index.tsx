import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { block } from 'bem-cn';
import './index.scss';

/**
 * Navigation Component
 * @constructor
 */
const Navigation: FunctionComponent = () => {
  const styleSheet = block('navigation');

  return (
    <nav className={styleSheet()}>

      <NavLink exact to="/search" className={styleSheet('link')}>
        Поиск
      </NavLink>

      <NavLink exact to="/" className={styleSheet('link')}>
        Избранные
      </NavLink>

    </nav>
  );
};

export default Navigation;