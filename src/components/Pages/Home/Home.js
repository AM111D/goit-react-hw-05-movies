import { useEffect, useState, useLocation } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=69130d0521ed03b58ebb84abea94c8b9`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('The resource you requested could not be found.');
        }
        return response.json();
      })
      .then(data => setMovies(data.results))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  // console.log(location);

  return (
    <ul className={css.headerList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.headerListItem}>
          <NavLink
            to={`/movies/${movie.id}`}
            className={css.headerListItemLink}
          >
            {movie.title || movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;