import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <div>all this in Cast: {movieId}</div>;
};

export default Cast;
