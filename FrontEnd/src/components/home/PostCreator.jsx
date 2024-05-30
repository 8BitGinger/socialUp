import React, { useState } from 'react';
import '../../assets/css/postGen.css';
import mediaIconsLogo from '../../assets/images/mediaIconsLogos.jpg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import toneIcons from '../../assets/images/toneIcons.jpg';
import audienceIcons from '../../assets/images/audienceIcons.jpg';

import postIcons from '../../assets/images/postIcons.jpg';

const PostCreator = () => {
  return (
    <section className="generator__container">
      <img src={mediaIconsLogo} alt="Social Media Icon Banner" />
      <form className="post-container">
        <label htmlFor="facebook">Where would you like to post?</label>
        <div className="social_media row">
          <div className="row_1">
            <input
              type="checkbox"
              id="facebook"
              name="facebook"
              value="facebook"
            />
            <h4>
              <FaFacebookF />
              Facebook
            </h4>{' '}
            <input
              type="checkbox"
              id="instagram"
              name="instagram"
              value="instagram"
            />
            <h4>
              <FaInstagram />
              Instagram
            </h4>{' '}
          </div>

          <div className="row_1">
            <input
              type="checkbox"
              id="twitter"
              name="twitter"
              value="twitter"
            />
            <h4>
              <FaXTwitter />
              Twitter
            </h4>{' '}
            <input
              type="checkbox"
              id="linkedin"
              name="linkedin"
              value="linkedin"
            />
            <h4>
              <FaLinkedinIn />
              LinkedIn
            </h4>{' '}
          </div>
        </div>
        <img src={toneIcons} alt="Social Media Icon Banner" />

        <label htmlFor="keywords">What&apos;s the tone of the post?</label>
        <div className="keywords_select column">
          <div className=" social_media row">
            <div className="row_2">
              <input
                type="checkbox"
                id="business"
                name="business"
                value="business"
              />
              Professional
              <input type="checkbox" id="casual" name="casual" value="casual" />
              Casual
              <input type="checkbox" id="fun" name="fun" value="fun" />
              Fun
            </div>
            <div className="row_2">
              <input
                type="checkbox"
                id="serious"
                name="serious"
                value="serious"
              />
              Serious
              <input
                type="checkbox"
                id="reflective"
                name="reflective"
                value="reflective"
              />
              Reflective
              <input
                type="checkbox"
                id="excited"
                name="excited"
                value="excited"
              />
              Excited
            </div>
          </div>
          <input type="text" id="select_custom" placeholder="Enter Your Own!" />
          <p>Separate Keywords by Commas!</p>
          <div className="column social_media">
            <img src={audienceIcons} alt="Social Media Icon Banner" />

            <label htmlFor="target_audience">Choose your Target Audience</label>
            <br></br>
            <div className="row_1">
              <input
                type="checkbox"
                id="general"
                name="general"
                value="general"
              />
              General
              <input
                type="checkbox"
                id="young_adults"
                name="young_adults"
                value="young_adults"
              />
              Young Adults
              <input
                type="checkbox"
                id="seniors"
                name="seniors"
                value="seniors"
              />
              Seniors
            </div>
          </div>
          <div className="post_text">
            <img src={postIcons} alt="Social Media Icon Banner" />

            <textarea placeholder="Your Post Here" />
          </div>
        </div>
        <button className="btn btn__create">Create Post</button>
      </form>
    </section>
  );
};

export default PostCreator;
