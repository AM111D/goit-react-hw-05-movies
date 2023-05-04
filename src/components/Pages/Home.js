import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=69130d0521ed03b58ebb84abea94c8b9`
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink>{movie.title || movie.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Home;
