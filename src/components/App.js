import { NavLink, Route, Routes } from 'react-router-dom';
// import FetchFilmsApi from 'service/films-api';
import Home from './Pages/Home';
import Movies from './Pages/Movies';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />
      </Routes>
    </div>
  );
};

export default App;
