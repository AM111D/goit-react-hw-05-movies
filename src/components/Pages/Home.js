import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>
            {movie.title || movie.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;
