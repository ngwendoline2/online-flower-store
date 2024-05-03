import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <div className='nav'>
      <Link to='/'>
        <div>Home</div>
      </Link> <br></br>
      <Link to='About'>
          <div>About</div>
      </Link> <br></br>
      <Link to="contact">
        <div>Contact</div>
        </Link>
        <Link to='Thankyou'>
          <div>Thankyou</div>
        </Link>
      </div>
  )
}