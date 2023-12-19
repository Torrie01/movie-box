import React from 'react'
import { Link } from 'react-router-dom'
import Pics from '../images/Pics.png';
import PixB from '../images/PixB.svg';

const MoviesCard = ({movieLists, isClicked, handleClick}) => {
  return (
    <div className='moviesGrid-content' data-testid='movie-card'>
    {movieLists.map((movie) => (
                
        <div key={movie.id} >
            <div><Link to={`/movies/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='movie-poster' alt='poster' data-testid='movie-poster'/></Link></div>
            <div>
                <p className='Preferred'>
                    <span data-testid='movie-release-date'>{movie.release_date} </span>
                </p>
                <p className='movies-name' data-testid='movie-title'>{movie.title}</p>
                <div className='gif-content'>
                    <div><img src={Pics} alt='Thumbnail' /> <span>{movie.vote_count}</span></div>
                    <div><img src={PixB} alt='Thumbnail' /> <span>{movie.popularity}</span></div>
                </div>
            </div>
        </div>
       
   
    ))}
    </div>
  )
  
}

export default MoviesCard