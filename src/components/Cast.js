import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultImageActor from '../images/profile-default.jpg';

const Cast = () => {
  const { movieId } = useParams();

  const [moviesCast, setMoviesCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=69130d0521ed03b58ebb84abea94c8b9&language=en-US`
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMoviesCast(data.cast);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setError(error.message);
      });
  }, [movieId]);

  useEffect(() => {
    window.scrollTo(0, 240);
  }, [moviesCast]);

  return (
    <>
      <div>
        <ul>
          {moviesCast.map(movieCast => {
            return (
              <li key={movieCast.cast_id}>
                {movieCast.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movieCast.profile_path}`}
                    alt={movieCast.name}
                    width={100}
                  />
                ) : (
                  <img src={defaultImageActor} alt="act" width={100} />
                )}

                <h5>{movieCast.name}</h5>
                <p>Character: {movieCast.character}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Cast;
