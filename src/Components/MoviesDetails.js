// eslint-disable-next-line 
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import fetchData from './fetchData';
import Pix from '../images/tv.svg'
import PixA from  '../images/Home.svg'
import PixB from '../images/Movie Projector.svg'
import PixC from '../images/TV Show.svg'
import PixD from '../images/Calendar.svg'
import PixE from '../images/List.svg'
import PixF from '../images/Logout.svg'
import poster from '../images/Rectangle 37.png'

const MoviesDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { data:movie, loading, error } = fetchData('https://api.themoviedb.org/3/movie/' + id + '?api_key=511103d2758cc24a63a3b07184fd61c0')
  console.log(movie)

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='movies-info-page'>
        {loading && <div>Loading...</div> }
        {error && <div>{error}</div>}
        {movie && (
          <div className='movies-info'>
            <div className='left-sidebar'>
              <a href='/' className='current-logo'><img src={Pix} alt='will'/><h2>MovieBox</h2></a>
              <div className='sidebar-links'>
                <a href='#123'><img src={PixA} alt='will'/><span>Home</span></a>
                <a href='#123'><img src={PixB} alt='will'/><span>Movies</span></a>
                <a href='#123'><img src={PixC} alt='will'/><span>TV series</span></a>
                <a href='#123'><img src={PixD} alt='will'/><span>Upcoming</span></a>
              </div>
              <div className='ads'>
                <p>Play movie quizes and earn free tickets</p>
                <span>For people are playing now</span>
                <a href='#123' className='play-btn'>start playing</a>
              </div>
              <a className='log-off' href='#' onClick={handleLogout}>
                <img src={PixF} alt='yell' /> <span>Log out</span></a>
            </div>
            <div className='major-content'>
              <div className='major-row1'>
                <div>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}` } className='backdrop-poster' alt='imgA'></img>
                </div>
                <p data-testid='movie-title'>{movie.title} . <span data-testid='movie-release-date'>{movie.release_date}</span></p>
              </div>
              <div className='major-row2'>
                <div className='sub-rowA'>
                  <p className='overview' data-testid='movie-overview'>{movie.overview}</p>
                  <p>Director: Joseph Kosinaki</p>
                  <p>Writers: Jim Cash, Jack Epps jr, Peter Craig</p>
                  <p>Stars: Tom Cruise, Jenifer Conolly, Miles Tailor</p>
                  <div>
                    <button>Top rated movie #65</button>
                    <p>Awards 9 nominations</p>
                  </div>
                </div>
                <div className='sub-rowB'>
                  <div className='show-btns'>
                    <a href='#123'>See showtimes</a>
                    <a href='#123'>More watch options</a>
                  </div>
                  
                  <div className='cover-posters'>
                    <img src={poster} alt='poster'/>
                    <a href='/' className='attribute'><img src={PixE} alt='imageA'/> <span>The best movies and shows in september</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        )}
    </div>
  )
}

export default MoviesDetails;