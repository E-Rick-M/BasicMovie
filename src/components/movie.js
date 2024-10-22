
// Movie.js
import React from 'react';
import MovieItem from './movieItem';
import classes from './movie-app.module.css';
import AddMovie from './AddMovie'
import {useState} from 'react'
import Modal from './modal';

function Movie() {
    const [movies,setMovies]=useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  // Example array of movie data
//   const movies = [
//     {
//       id: 1,
//       title: "Inception",
//       poster: "https://f.woowoowoowoo.net/resize/250x400/d7/64/d76490dba9831502963013285425627e/d76490dba9831502963013285425627e.jpg",
//       releaseDate: "2010-07-16"
//     },
//     {
//       id: 2,
//       title: "The Dark Knight",
//       poster: "https://f.woowoowoowoo.net/resize/250x400/d7/64/d76490dba9831502963013285425627e/d76490dba9831502963013285425627e.jpg",
//       releaseDate: "2008-07-18"
//     },
//     {
//       id: 3,
//       title: "Interstellar",
//       poster: "https://f.woowoowoowoo.net/resize/250x400/d7/64/d76490dba9831502963013285425627e/d76490dba9831502963013285425627e.jpg",
//       releaseDate: "2014-11-07"
//     }
//   ];

    function startAddMovieHandler(movie){
        const {Id,Title,Url,Date}=movie
        setMovies((prevMovies)=>[
            {
                id:Id,
                title:Title,
                poster:Url,
                releaseDate:Date
            },
            ...prevMovies
        ])
        console.log(movies)
        hideAddMovieModal()
    }

    function showAddMovieModal() {
        setIsModalOpen(true);
      }
    
      // Hide modal
      function hideAddMovieModal() {
        setIsModalOpen(false);
      }

  return (
    <main className={classes.container}>
      <h1>Movies Catalog</h1>
      <button className={classes.addMovieButton} onClick={showAddMovieModal}>Add Movie</button>

      {isModalOpen &&(
        <Modal onClose={hideAddMovieModal}>
        <AddMovie startAddingMovie={startAddMovieHandler} />
      </Modal>
      )}
      <div className={classes.moviesGrid}>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            releaseDate={movie.releaseDate}
          />
        ))}
      </div>
    </main>
  );
}

export default Movie;
