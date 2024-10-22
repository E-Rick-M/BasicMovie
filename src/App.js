import {Fragment} from 'react'
import './App.css';
import Header from './components/header'
import MovieApp from './components/movie-app'

function App() {
  return (
   <Fragment>
    <Header/>
    <MovieApp/>
   </Fragment>
  );
}

export default App;
