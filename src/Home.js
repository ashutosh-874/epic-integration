// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Health App</h1>
      <Link to="/login">
        <button>Login with Epic</button>
      </Link>
    </div>
  );
}

export default Home;
