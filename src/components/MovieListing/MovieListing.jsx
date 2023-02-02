import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieListing/MovieListing.scss'

function MovieListing() {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  let renderMovies = "";
  let renderShows = "";

  console.log(movies.Search)
  console.log(movies.Search)

  renderMovies = movies.Response==="True"?(
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ):(
    <div className='movies-error'>
        <h3>{movies.Error}</h3>
    </div>
  )
  renderShows = shows.Response==="True"?(
    shows.Search.map((show,index)=>(
      <MovieCard key={index} data={show}/>
    ))
  ):(
    <div className='movies-error'>
        <h3>{movies.Error}</h3>
    </div>
  )
  return (
    <div className='movie-wrapper'>
        <div className="movie-list">
          <h2>Movies</h2>
          <div className='movie-container'>
            {renderMovies}
          </div>
        </div>
        <div className="movie-list">
          <h2>Tv Shows</h2>
          <div className='movie-container'>
            {renderShows }
          </div>
        </div>
    </div>
  )
}

export default MovieListing