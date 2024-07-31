import { React, useRef } from 'react';
import '../assets/css/contact.css';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

import { useForm, ValidationError } from '@formspree/react';

import arrowUp from '../assets/images/arrowUp.png';

const Contact = () => {
  window.scrollTo(0, 0);
  const [state, handleSubmit, reset] = useForm('mjvnrreq');

  if (state.succeeded) {
    setTimeout(() => {
      window.location.replace('/');
    }, 5000);
    return <p className="pop-up">Thanks for reaching out!</p>;
  } else {
    if (state.errors) {
      console.log(state.errors);
      return <p className="pop-up">There was an error. Please try again.</p>;
    }
  }

  return (
    <>
      <section id="contact" className="page_container">
        <div className="contact_container">
          <div className="overlay-contact">
            <div className="max-width">
              <h2>Contact Me.</h2>
              <div className="top_section">
                <img src={arrowUp} alt="Social Up Arrow" />
                <p>
                  Want to connect? Fill out our contact form below. We&apos;ll
                  get back to you promptly.
                </p>
              </div>
              <form id="contact-form" onSubmit={handleSubmit}>
                <input
                  type="name"
                  placeholder="Your Name"
                  name="name"
                  id="name"
                  required={true}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  id="email"
                  required={true}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  placeholder="Your Message"
                  name="message"
                  id="message"
                  required={true}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  onClick={reset}
                  className="btn btn_submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="social-strip">
        <Link to="https://github.com/8BitGinger" target="_blank">
          <FaGithub />
        </Link>

        <Link to="https://twitter.com/the8bitginger" target="_blank">
          <FaTwitter />
        </Link>
        <Link to="https://www.linkedin.com/in/ryanfanntastic/" target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Contact;
