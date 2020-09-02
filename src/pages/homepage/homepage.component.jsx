import React from 'react';

import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

const HomePage = ({currentUser}) => (
  <div className='homepage'>
    {/* <h2> HomePage</h2> */}
    <div className='options'>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          <h2> Here is your location</h2>
          
        </div>
      ) : (
        <Link className='option' to='/signin'>
          <h2>Please Login to check your location </h2>
        </Link>
      )}
    </div>
    {/* <Directory /> */}
  </div>
);

export default HomePage;
