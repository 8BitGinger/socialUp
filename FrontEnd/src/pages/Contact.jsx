import { React, useRef } from 'react';
import '../assets/css/contact.css';

import { useForm, ValidationError } from '@formspree/react';

import contactMe from '../assets/images/devIcon.png';

const Contact = () => {
  const [state, handleSubmit, reset] = useForm('mjvnrreq');

  if (state.succeeded) {
    window.location.reload();
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
          <div>
            <div>
              <h2>Contact Me.</h2>

              <div className="top_section">
                <img
                  className=" w-64  hidden avatar2 lg:flex flex-1 max-w-[220px] lg:max-w-[262px] mx-auto"
                  src={contactMe}
                  alt="screenshot"
                />
                <p>
                  I am currently looking to launch a career in Web Development.
                  If you have any questions or would like to contact me, please
                  fill out the form below and I will get back to you as soon as
                  possible.
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
    </>
  );
};

export default Contact;
