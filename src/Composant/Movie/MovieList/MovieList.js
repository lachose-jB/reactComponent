import Movie from "../Movie/Movie";
import { PropTypes } from 'prop-types';
import styles from './MovieList.module.css';

const MovieList = ({movies, onToggleBookmark, onToggleLike}) => {

  return ( 
    <div className={styles.row}>
      { movies.map(movie=> <Movie {...movie} key={movie.id} onToggleBookmark={onToggleBookmark} onToggleLike={onToggleLike} />)}
    </div>
   );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  onToggleBookmark: PropTypes.func,
  onToggleLike: PropTypes.func
}
 
export default MovieList;