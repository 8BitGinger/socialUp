import React from 'react';
import banner from '../assets/images/aboutBanner.jpg';
import '../assets/css/about.css';
import geminiLogo from '../assets/images/geminiBase.png';

const About = () => {
  return (
    <>
      <section className="about">
        <img src={banner} alt="AI Created Social Media Banner" />

        <p>
          <span className="primary">SocialUP↑</span>
          <br></br>
          automatically formats your post to have the same content work for
          multiple social media sites. Don&apos;t worry about the character
          count on Twitter, or trying to find the right approach on
          Instagram, what about the hassle of redrafting to sound more
          professional on LinkedIN?
          <br></br>
          <br></br>
          This tool takes all the worry and hassle out of maintaining multiple
          Social Media presences. Allowing your ideas, thoughts, and promotions
          to be shared across all your social media platforms while only writing
          it once.
        </p>
      </section>
      <section className="about2">
        <h2>Features:</h2>
        <ul>
          <li>Text Upscaling</li>
         
          <li>Multi-Platform Formatting</li>
          <li>Simplicity and Ease!</li>
        </ul>
        <img src={geminiLogo} alt="Gemini Style Logo" />
        <h2>Supported Social Media:</h2>

        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIN</li>
        </ul>
      </section>

      <section className="about">
        <h2>Powered by Gemini</h2>
        <p>
           Gemini is the backbone of
          SocialUP↑ and is the reason that it can do all the amazing things that
          it can.{' '}
          <span className="primary2">
            Submitted to the Gemini API Developer Competition, SocialUP↑
          </span>
        </p>
      </section>
    </>
  );
};

export default About;
