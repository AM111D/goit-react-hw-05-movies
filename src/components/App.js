import { Route, Routes } from 'react-router-dom';
// import FetchFilmsApi from 'service/films-api';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import Layout from './layout';

const App = () => {
  return (
    <Routes>
      <Route patch="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<div>cast</div>} />
          <Route path="reviews" element={<div>elements</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
