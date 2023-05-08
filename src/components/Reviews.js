import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=69130d0521ed03b58ebb84abea94c8b9&language=en-US&page=1 `
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setMovieReviews(data.results);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        setError(error.message);
        console.log(error);
      });
  }, [movieId]);

  useEffect(() => {
    window.scrollTo(0, 240);
  }, [movieReviews]);
  console.log(movieReviews);
  return (
    error && (
      <div>
        <ul>
          {movieReviews.map(movieReview => {
            return (
              <li key={movieReview.id}>
                <h3>{movieReview.author}</h3>
                <p>{movieReview.content}</p>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Reviews;
