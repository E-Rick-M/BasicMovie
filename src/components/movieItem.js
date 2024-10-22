
import React from 'react';
import classes from './movie-item.module.css';

function MovieItem({ title, poster, releaseDate }) {
  return (
    <div className={classes.movieItem}>
      <img src={poster} alt={title} className={classes.poster} />
      <div className={classes.details}>
        <h2>{title}</h2>
        <p>Release Date: {releaseDate}</p>
      </div>
    </div>
  );
}

export default MovieItem;
