import classes from './AddMovie.module.css';
import {useRef} from 'react'
function AddMovie(props) {
    // const []= useState([])
    const enteredTitle=useRef()
    const enteredUrl=useRef()
    const enteredDate=useRef()


    function addMovieHandler(event){

        console.log(event)
        event.preventDefault()

        const formatedDate=new Date(enteredDate.current.value).toLocaleString('en-us',{
            day : "numeric",
            month:"long",
            year:"numeric"
        })

        const newMovie ={
            Id:Math.random(),
            Title:enteredTitle.current.value,
            Url:enteredUrl.current.value,
            Date:formatedDate

        }
        // movies.push(newMovie)
        props.startAddingMovie(newMovie)
        console.log(newMovie)
        enteredTitle.current.value=''
        enteredUrl.current.value=''
        enteredDate.current.value=''
    }
  return (
    <div className={classes.addMovieContainer}>
      <h2>Add a New Movie</h2>
      <form onSubmit={addMovieHandler}>
        <div className={classes.formControl}>
          <label htmlFor="title">Movie Title</label>
          <input type="text" id="title" placeholder="Enter movie title" ref={enteredTitle}/>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="poster">Poster URL</label>
          <input type="text" id="poster" placeholder="Enter poster URL" ref={enteredUrl}/>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="releaseDate">Release Date</label>
          <input type="date" id="releaseDate" ref={enteredDate}/>
        </div>
        <button type="submit" className={classes.addButton}>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
