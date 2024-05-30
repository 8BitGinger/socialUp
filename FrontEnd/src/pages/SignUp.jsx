import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/loginSignUp.css';

const SignUp = () => {
  return (
    <>
      <section className="login features">
        <h2>Sign Up↑</h2>
        <form className="column">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required></input>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required></input>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required></input>
          <label htmlFor="password">Confirm Password:</label>
          <input
            type="password"
            id="password__confirm"
            name="password__confirm"
            required
          ></input>
          <button className="btn" type="submit">
            Sign Up↑
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </section>
    </>
  );
};

export default SignUp;
