import React from 'react';
import '../assets/css/profile.css';
import profile__pic from '../assets/images/placeholder.png';
import { Link } from 'react-router-dom';

let username = 'Test User 1';
let email = 'test@gmail.com';
let upscaled_posts = 34;
let post_link = '/post/1';
let post_date = '5/14/24';

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="row">
        <img src={profile__pic} alt="Profile Picture" />
        <h1>Username</h1>
      </div>
      <div className="column contact split">
        <form>
          <div className="row split">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder={username}
              readOnly
            ></input>
          </div>
          <div className="row split">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="username"
              placeholder={email}
              readOnly
            ></input>
          </div>
        </form>

        <p>
          <strong>Upscaled Posts:</strong> {upscaled_posts}
          <br />
          <strong>Last Post:</strong> <Link to={post_link}>{post_date}</Link>
        </p>
      </div>
      <div className="row">
        <button className="btn">Edit Profile</button>
        <button className="btn btn__danger">Delete Profile</button>
      </div>
    </div>
  );
};

export default Profile;
