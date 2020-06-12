import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { block } from 'bem-cn';
import { Button } from '..';
import './index.scss';

/**
 * Navigation Component
 * @constructor
 */
const Navigation: FunctionComponent = () => {
  const styleSheet = block('navigation');

  return (
    <nav className={styleSheet()}>

      <NavLink exact to="/" className={styleSheet('link')}>
        Главная
      </NavLink>

      <NavLink exact to="/search" className={styleSheet('link')}>
        Поиск
      </NavLink>

      <div className={styleSheet('auth')}>

        <div className={styleSheet('button')}>
          <Button>
            Войти
          </Button>
        </div>

      </div>

    </nav>
  );
};

export default Navigation;