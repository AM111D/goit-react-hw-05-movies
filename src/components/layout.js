import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { styled } from 'react';
// import styled from 'styled-components';

import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className={css.headerList}>
            <li className={css.headerListItem}>
              <NavLink to="/" className={css.headerListItemLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.headerListItemLink}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.container}>
        <span className={css.Footer}></span>
      </footer>
    </div>
  );
};

export default Layout;
