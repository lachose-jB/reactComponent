import { PropTypes } from 'prop-types';
import styles from './Movie.module.css';

const Movie = ({
  id, 
  title, 
  date, 
  category,
  resume,
  like,
  nbLike, 
  comment, 
  bookmark,
  trailer, 
  onToggleBookmark,
  onToggleLike,
  image}) => {

  const [day, month, year] = date.split(' ');

  const likeCss = ["fa"];
  likeCss.push((like) ? 'fa-heart' :  'fa-heart-o');

  const bookmarkCss = ["fa"];
  bookmarkCss.push((bookmark) ? 'fa-bookmark' : 'fa-bookmark-o');

  return ( 
    <div className={[styles.card, styles.fullImage].join(' ')}>
      <div className={styles.wrapper} style={{backgroundImage: `url(${image})`}}>
        <div className={styles.header}>
          <div className={styles.date}>
            <span className="day">{day}</span>
            <span className="month">{month}</span>
            <span className="year">{year}</span>
          </div>
          <ul className={styles.menuContent}>
            <li>
              <a onClick={()=>onToggleBookmark(id)} href="#" className={bookmarkCss.join(' ')}></a>
            </li>
            <li>
              <a onClick={()=>onToggleLike(id)} href="#" className={likeCss.join(' ')}>
                <span>{nbLike}</span>
              </a>
            </li>
            <li>
              <a href="#" className="fa fa-comment-o">
                <span>{comment}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.data}>
          <div className={styles.content}>
            <span className={styles.author}>{category}</span>
            <h1 className={styles.title}>
              <a href="#">{title}</a>
            </h1>
            <p className={styles.text}>
              {resume}
            </p>
            <a href={trailer} className={styles.button} target="_blank">
              Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
 

Movie.propTypes = {
  id: PropTypes.string, 
  title: PropTypes.string, 
  date: PropTypes.string, 
  category: PropTypes.string, 
  resume: PropTypes.string,
  like: PropTypes.bool, 
  nbLike: PropTypes.number, 
  comment: PropTypes.number, 
  bookmark: PropTypes.bool,
  trailer: PropTypes.string, 
  image: PropTypes.string,
  onToggleBookmark: PropTypes.func,
  onToggleLike: PropTypes.func
}
export default Movie;