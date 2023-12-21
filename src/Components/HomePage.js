import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Footer from './Footer';
import useFetch from './fetchData';
import MoviesCard from './MoviesCard';
import Logo from '../images/tv.svg';
import menu from '../images/Menu.svg';
import search from '../images/Search.svg';

const HomePage = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('authToken');

  const [movieLists, setMovieLists] = useState([]);
  const { data: fetchedMovies, error, loading, fetchData } = useFetch('https://api.themoviedb.org/3/discover/movie?api_key=850136383d9112b1fa4ef05d1d27c587');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;

  useEffect(() => {
    if (fetchedMovies && fetchedMovies.length > 0) {
      setMovieLists(prevMovies => (currentPage === 1 ? [...fetchedMovies] : [...prevMovies, ...fetchedMovies]));
    }
  }, [fetchedMovies, currentPage]);

  useEffect(() => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  }, [isAuthenticated]);

  const handleSeeMore = () => {
    fetchData(currentPage + 1);
    setCurrentPage(prevPage => prevPage + 1);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieLists.slice(indexOfFirstMovie, indexOfLastMovie);

  const filteredMovies = currentMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className='content'>
      <div className='hero-section'>
        <div className='navbar'>
          <div className='left-nav'>
            <img src={Logo} alt='' className='icon'/>
            <a href='#123'>MovieBox</a>
          </div>
          <div className='middle-nav'>
            <input
              type='text'
              className='search-bar'
              placeholder='What do you want to watch?'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={search} alt='' />
          </div>
          <div className='right-nav'>
            <a href='/login' onClick={handleSignOut}>Sign Out</a>
            <img src={menu} alt='' className='icon'/>
          </div>
        </div>
        <Hero />
      </div>
      <div className='movie-list'>
        <div className='movies-grid'>
          <h2>Featured Movie</h2>
          <button onClick={handleSeeMore}>See more</button>
        </div>
        {loading && <h2>Loading...</h2>}
        <h2>{error}</h2>
        <div className='moviesGrid-contents'>
          <MoviesCard movieLists={filteredMovies} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;