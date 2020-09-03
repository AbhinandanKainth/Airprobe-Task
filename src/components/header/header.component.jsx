import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import  Logo  from '../../assets/logo.PNG';
import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src = {Logo}/>
    </Link>
    <div className='options'>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          <h2> LOGGED IN, Click here to SIGN OUT</h2>
          
        </div>
      ) : (
        <Link className='option' to='/signin'>
          <h2>SIGN IN </h2>
        </Link>
      )}
    </div>
  </div>
);

export default Header;
