import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={css.StyledLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.StyledLink}>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default Layout;
