import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/loginSignUp.css';

const Logout = () => {
  return (
    <>
      <section className="login features">
        <h2>Login</h2>
        <form className="column">
          <label htmlFor="username">You are already Logged In!</label>
          <input type="text" id="username" name="username" required></input>
          <label htmlFor="password">Would you like to Logout?</label>
          <button className="btn btn__logout" type="submit">
            Login
          </button>
        </form>
        <p>
          Or head straight to <Link to="/profile">your Profile!</Link>
        </p>
      </section>
    </>
  );
};

export default Logout;
