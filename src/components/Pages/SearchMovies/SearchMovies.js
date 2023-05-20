import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import debounce from 'lodash.debounce';

const SearchMovies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const updateQueryString = evt => {
    const value = evt.target.value;
    setQuery(value);
    setSearchParams(value === '' ? {} : { query: value });
  };

  return (
    <div>
      Search Movies - about movie
      <input type="text" value={query} onChange={updateQueryString} />
    </div>
  );
};

export default SearchMovies;
