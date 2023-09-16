import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to our Website</h1>
      <p>Explore our services:</p>
      <ul>
        <li>
          <Link to="/landingSignup">Signup</Link>
        </li>
        <li>
          <Link to="/landing">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
