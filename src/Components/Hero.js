import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Play.svg';
import Pics from '../images/Pics.png';
import PixB from '../images/PixB.svg';

const Hero = () => {
  const movieId = 123; 

  return (
    <div className='heroName-box'>
      <h1 className='heroName-box-title'>John Wick 3: Parabellum</h1>
      <div className='row2'>
        <div>
          <img src={Pics} alt='Pics' /> <span>86.0/100</span>
        </div>
        <div>
          <img src={PixB} alt='PixB' /> <span>97%</span>
        </div>
      </div>
      <div className='row3'>
        <p>
          John Wick is on the run after killing a member of the international assassins' guild,
          and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </p>
        <Link to={`/movies/${movieId}`}>
          <img src={Logo} alt='Logo' /> <span>WATCH TRAILER</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
