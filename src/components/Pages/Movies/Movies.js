import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  const query = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    evt.target.value === ''
      ? setSearchParams({})
      : setSearchParams({ query: evt.target.value });
  };

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=69130d0521ed03b58ebb84abea94c8b9&language=en-US&page=1&include_adult=false&query=${query}`
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
    }
  }, [query]);

  console.log(location);
  return (
    <>
      <div>Search Movies - about movie</div>
      <input type="text" value={query} onChange={updateQueryString} />
      <button type="button" onClick={() => {}}>
        Search
      </button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;