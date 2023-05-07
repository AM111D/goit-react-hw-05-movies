import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetales, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=69130d0521ed03b58ebb84abea94c8b9`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMovieDetails(data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setError(error.message);
        console.log(error);
      });
  }, [movieId]);

  // console.log(movieDetales);

  return (
    <div>
      {Object.keys(movieDetales).length ? (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetales.poster_path}`}
            alt={movieDetales.title}
            width={100}
          />
          <div>
            <h3>{movieDetales.title}</h3>
            <p>User Score: {Number(movieDetales.vote_average).toFixed(1)}/10</p>
            <h3>Overview</h3>
            <p>{movieDetales.overview}</p>
            <h4>Genres</h4>
            <ul>
              {movieDetales.genres &&
                movieDetales.genres.map(genre => {
                  return (
                    <li key={genre.id}>
                      <p>{genre.name}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      ) : (
        <p>I'm sorry we didn't find anything for you. Backend broken</p>
      )}
    </div>
  );
};

export default MovieDetails;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=69130d0521ed03b58ebb84abea94c8b9&language=en-US
