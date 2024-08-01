import React from 'react';
import banner from '../assets/images/aboutBanner2.jpg';
import '../assets/css/about.css';
import geminiLogo from '../assets/images/geminiBase2.png';

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <section className="about2">
        <img
          src={banner}
          alt="AI Created Image with text stating What is Social UP?"
        />
        <p>
          <span className="primary">SocialUp↑</span>
          <br></br>
          automatically formats your post to have the same content work for
          multiple social media sites. Don&apos;t worry about the character
          count on Twitter, or trying to find the right approach on Instagram,
          what about the hassle of redrafting to sound more professional on
          LinkedIN?
          <br></br>
          <br></br>
          This tool takes all the worry and hassle out of maintaining multiple
          Social Media presences. Allowing your ideas, thoughts, and promotions
          to be shared across all your social media platforms while only writing
          it once.
        </p>
      </section>

      <section className="about">
        <div className="about_container">
          <h2>Instructions:</h2>
          <ul>
            Start by:
            <li>
              1. Selecting what Platforms you would like to share your Content
              on
            </li>
            <li>2. Choose the Tone you would like to set for your Content</li>
            <li>3. Identify your Target Audience</li>
            <li> 4. Enter what you would like to say </li>
            <li>5. Click Add Content </li>
            <li>
              6. Click Generate Upscaled Post Your content will be upscaled
              using Gemini&apos;s API and then returned below for you to copy
              and paste as needed.
            </li>{' '}
            <br></br>
            <li className="italic">
              {' '}
              Post not quite right? ☹ Edit the text in the Text Area or Just
              click Reload!
            </li>
          </ul>
        </div>
      </section>

      <section className="about2">
        <h2>Features:</h2>
        <ul>
          <li>Text Upscaling</li>

          <li>Multi-Platform Formatting</li>
          <li>Simplicity and Ease!</li>
        </ul>
        <img className="about3" src={geminiLogo} alt="Gemini Style Logo" />
        <h2>Supported Social Media:</h2>

        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>LinkedIN</li>
        </ul>
      </section>

      <section className="about">
        <h2>
          Powered by <a href="https://gemini.google.com/app">Gemini</a>
        </h2>
        <p>
          Gemini is the backbone of SocialUP↑ and is the reason that it can do
          all the amazing things that it can.{' '}
          <span className="italic">
            Submitted to the Gemini API Developer Competition as SocialUp↑
          </span>
        </p>
      </section>
    </>
  );
};

export default About;
