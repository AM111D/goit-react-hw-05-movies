import { Route, Routes } from 'react-router-dom';
// import FetchFilmsApi from 'service/films-api';
// import Home from './Pages/Home';
// import Movies from './Pages/Movies';
// import MovieDetails from './Pages/MovieDetails';
// import Layout from './Layout';
import Cast from './Cast';
import Reviews from './Reviews';
import { lazy } from 'react';

const Home = lazy(() => import('./Pages/Home/Home'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Layout = lazy(() => import('./Layout'));

const App = () => {
  return (
    <Routes>
      <Route patch="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
