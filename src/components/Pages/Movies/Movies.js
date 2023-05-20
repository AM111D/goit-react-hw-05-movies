import { useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './Movies.module.css';
import debounce from 'lodash.debounce';
import SearchMovies from '../SearchMovies/SearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  // const location = useLocation();

  const query = useSearchParams().get('query') ?? '';

  const fetchMovies = debounce(searchQuery => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=69130d0521ed03b58ebb84abea94c8b9&language=en-US&page=1&include_adult=false&query=${searchQuery}`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setError(error.message);
      });
  }, 1000);

  useEffect(() => {
    if (query) {
      fetchMovies(query);
    }
  }, [query, fetchMovies]);

  return (
    error === null && (
      <div className={css.SearchList}>
        <SearchMovies />
        <ul>
          {movies.map(movie => (
            <li key={movie.id} className={css.MovieItem}>
              <Link
                to={`/movies/${movie.id}`}
                // state={{ from: location }}
                className={css.MovieItemLink}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Movies;
