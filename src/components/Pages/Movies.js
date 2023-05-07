import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  return (
    <>
      <div>Search Movies - about movie</div>
      <input
        type="text"
        onChange={evt => setSearchParams({ movieId: evt.target.value })}
      />
      <button type="button" onClick={() => {}}>
        Search
      </button>
    </>
  );
};

export default Movies;

// https://api.themoviedb.org/3/search/movie?api_key=69130d0521ed03b58ebb84abea94c8b9&language=en-US&page=1&include_adult=false
