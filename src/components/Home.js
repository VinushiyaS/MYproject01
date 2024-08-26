import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Platform</h1>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/forgot-password">Forgot Password</Link>
    </div>
  );
};

export default Home;
