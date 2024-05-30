import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/loginSignUp.css';

const Login = () => {
  return (
    <>
      <section className="login features">
        <h2>Login</h2>
        <form className="column">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required></input>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <p>
          Don&apos;t have an account? <Link to="/signup">Sign Up↑</Link>
        </p>
      </section>
    </>
  );
};

export default Login;
