// Standard Imports
import { useContext, useMemo, useState } from 'react';

import { Context } from '../../context/Context';
import '../../assets/css/postGen.css';
import uniq from 'underscore/modules/uniq.js';

// import images
import mediaIconsLogo from '../../assets/images/mediaIconsLogos.jpg';
import toneIcons from '../../assets/images/toneIcons.jpg';
import audienceIcons from '../../assets/images/audienceIcons.jpg';
import postIcons from '../../assets/images/postIcons.jpg';
import userIcon from '../../assets/images/userIcon.png';

// import components
import LayoutRow from './LayoutRow';

// import helpers

// import icons
import {
  FaPause,
  FaCopy,
  FaFacebookF,
  FaInstagram,
  FaPlay,
} from 'react-icons/fa';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { IoReload } from 'react-icons/io5';

//function to handle form submission

const PostCreator = () => {
  const {
    onSent,

    showResult,
    loading,
    resultsData,
  } = useContext(Context);

  const [customKeyword, setCustomKeyword] = useState('');
  const [customContent, setCustomContent] = useState('');
  const [postPreview, setPostPreview] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [playing, setPlaying] = useState(false);

  const [post, setPost] = useState({
    social: [],
    tone: [],
    audience: [],
    content: '',
  });

  const voices = window.speechSynthesis.getVoices();

  const handleKeyword = (e) => {
    const { value } = e.target;
    setCustomKeyword(value);
  };

  const handleContent = (e) => {
    const { value } = e.target;
    setCustomContent(value);
  };

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    const newValue = value + ', ' + post.social;
    setPost({
      ...post,
      [name]: newValue,
    });
  };

  const handleToneChange = (e) => {
    const { name, value } = e.target;

    const newValue = value + ', ' + post.tone;
    setPost({
      ...post,
      [name]: newValue,
    });
  };

  const addKeyword = (e) => {
    e.preventDefault();
    const newValue = customKeyword + ', ' + post.tone;
    setPost({
      ...post,
      tone: newValue,
    });
  };

  const handleAudienceChange = (e) => {
    const { name, value } = e.target;
    const newValue = value + ', ' + post.audience;
    setPost({
      ...post,
      [name]: newValue,
    });
  };

  const copyText = () => {
    const text = document.querySelector('textarea');
    text.select();
    document.execCommand('copy');
  };

  const addCustomContent = (e) => {
    e.preventDefault();
    setPost({
      ...post,
      content: customContent,
    });
    setClicked(true);
    console.log(post);
  };

  const loadPage = () => {
    window.location.reload();
    window.location.top();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newSocial = uniq(post.social.split(', '));
    const newTone = uniq(post.tone.split(', '));
    const newAudience = uniq(post.audience.split(', '));

    let finalPost = `
I want you to craft a social Media post that is:
shared on these platforms: ${newSocial}
The tone of the post is: ${newTone}
The target audience is: ${newAudience}
The basic content of the post should similar to: ${post.content}

This needs to be a post that is engaging and will get people to interact with it.

Feel free to add some emojis or other fun elements to the post to make it more dynamic.

It needs to be production ready and ready to be shared on the selected platforms.

Any content like links, images, or other media should be included in the response like this: [link here] or [image here] etc.

I would like the response to be in this format:
Platform: (platform name here)
Post: (post text for selected platform here)
`;

    setPostPreview(true);
    const sendPost = JSON.stringify(finalPost);
    onSent(sendPost);
  };

  return (
    <>
      <section className="generator__container">
        <div className="overlay">
          {!showResult ? (
            <form className="post-container">
              <LayoutRow
                name="social"
                title="Where would you like to share?"
                image={mediaIconsLogo}
                imageAlt="Social Media Icons"
              >
                <div className="row_4">
                  <input
                    type="checkbox"
                    id="facebook"
                    name="social"
                    value="facebook"
                    onChange={handleSocialChange}
                  />
                  <label htmlFor="facebook">
                    <FaFacebookF />
                    <span className="social_word">Facebook</span>
                  </label>{' '}
                </div>
                <div className="row_4">
                  <input
                    type="checkbox"
                    id="instagram"
                    name="social"
                    value="instagram"
                    onChange={handleSocialChange}
                  />
                  <label htmlFor="instagram">
                    <FaInstagram />
                    <span className="social_word">Instagram</span>
                  </label>{' '}
                </div>
                <div className="row_4">
                  <input
                    type="checkbox"
                    id="twitter"
                    name="social"
                    value="twitter"
                    onChange={handleSocialChange}
                  />
                  <label htmlFor="twitter">
                    <FaXTwitter />
                    <span className="social_word">Twitter</span>
                  </label>{' '}
                </div>
                <div className="row_4">
                  <input
                    type="checkbox"
                    id="linkedin"
                    name="social"
                    value="linkedin"
                    onChange={handleSocialChange}
                  />
                  <label htmlFor="linkedin">
                    <FaLinkedinIn />
                    <span className="social_word">LinkedIn</span>
                  </label>{' '}
                </div>
              </LayoutRow>

              <LayoutRow
                name="tone"
                title="What's the tone of the post?"
                image={toneIcons}
                imageAlt="Emoji Icons"
              >
                <div className="keywords_select column">
                  <div className=" tone row">
                    <div className="row_2">
                      <input
                        type="checkbox"
                        id="business"
                        name="tone"
                        value="business"
                        onChange={handleToneChange}
                      />
                      <label htmlFor="business">Professional</label>
                    </div>

                    <div className="row_2">
                      <input
                        type="checkbox"
                        id="casual"
                        name="tone"
                        value="casual"
                        onChange={handleToneChange}
                      />
                      <label htmlFor="casual"> Casual</label>
                    </div>
                    <div className="row_2">
                      <input
                        type="checkbox"
                        id="fun"
                        name="tone"
                        value="fun"
                        onChange={handleToneChange}
                      />
                      <label htmlFor="fun"> Fun</label>
                    </div>

                    <div className="row_2">
                      <input
                        type="checkbox"
                        id="serious"
                        name="tone"
                        value="serious"
                        onChange={handleToneChange}
                      />
                      <label htmlFor="serious">Serious</label>
                    </div>
                    <div className="row_2">
                      <input
                        type="checkbox"
                        id="reflective"
                        name="tone"
                        value="reflective"
                        onChange={handleToneChange}
                      />
                      <label htmlFor="reflective">Reflective</label>
                    </div>

                    <div className="row_2">
                      <input
                        type="checkbox"
                        id="excited"
                        name="tone"
                        value="excited"
                        onChange={handleToneChange}
                      />
                      <label htmlFor="excited">Excited</label>
                    </div>
                  </div>
                  <div className="row_1">
                    <input
                      type="text"
                      id="select_custom"
                      placeholder="Enter Your Own!"
                      name="tone"
                      onChange={handleKeyword}
                      value={customKeyword}
                    />
                    <button className="btn btn__add" onClick={addKeyword}>
                      Add Keywords
                    </button>
                  </div>
                  <p>Separate Keywords by Commas!</p>
                </div>
              </LayoutRow>

              <LayoutRow
                name="audience"
                title="Choose Your Target Audience"
                image={audienceIcons}
                imageAlt="Diverse Avatars"
              >
                <div className="row_3">
                  <input
                    type="checkbox"
                    id="general"
                    name="audience"
                    value="general"
                    onChange={handleAudienceChange}
                  />
                  <label htmlFor="general">General</label>
                </div>
                <div className="row_3">
                  <input
                    type="checkbox"
                    id="young_adults"
                    name="audience"
                    value="young"
                    onChange={handleAudienceChange}
                  />
                  <label htmlFor="young_adults">Adults</label>
                </div>

                <div className="row_3">
                  <input
                    type="checkbox"
                    id="young_adults"
                    name="audience"
                    value="young"
                    onChange={handleAudienceChange}
                  />
                  <label htmlFor="young_adults">Young Adults</label>
                </div>

                <div className="row_3">
                  <input
                    type="checkbox"
                    id="colleagues"
                    name="audience"
                    value="colleagues"
                    onChange={handleAudienceChange}
                  />
                  <label htmlFor="colleagues">Colleagues</label>
                </div>

                <div className="row_3">
                  <input
                    type="checkbox"
                    id="followers"
                    name="audience"
                    value="followers"
                    onChange={handleAudienceChange}
                  />
                  <label htmlFor="followers">Followers</label>
                </div>

                <div className="row_3">
                  <input
                    type="checkbox"
                    id="customers"
                    name="audience"
                    value="customers"
                    onChange={handleAudienceChange}
                  />
                  <label htmlFor="customers">Customers</label>
                </div>

                <div className="row_3">
                  <input
                    type="checkbox"
                    id="family"
                    name="audience"
                    value="family"
                    onChange={handleAudienceChange}
                  />
                  <label htmlFor="family">Family</label>
                </div>
              </LayoutRow>

              <LayoutRow
                name="post"
                title="Create Your Post"
                image={postIcons}
                imageAlt="Social Media Icons"
              >
                <div className="post_text">
                  <textarea
                    placeholder="What do you want to say?"
                    onChange={handleContent}
                  />
                  <button className="btn btn__add" onClick={addCustomContent}>
                    Add Content
                  </button>
                </div>
              </LayoutRow>

              {clicked ? (
                <div className="btn__holder">
                  <button className="btn btn__create" onClick={handleSubmit}>
                    Generate Upscaled Post
                  </button>
                </div>
              ) : null}
            </form>
          ) : (
            <div className="post__container">
              {!loading ? (
                <>
                  <div className="social__nameplate">
                    <img src={userIcon} alt="User Icon" />
                    <div className="name__date">
                      <h3>Social Up User</h3>
                      <p>Right Now</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2>loading... please wait</h2>
                  <div className="loader">
                    <hr />
                  </div>
                </>
              )}
              <textarea
                defaultValue={resultsData}
                readOnly={loading ? true : false}
                id="response"
              ></textarea>
              {!loading ? (
                <div className="split2">
                  <button className="btn__icon btn" onClick={copyText}>
                    <div className="icon">
                      <FaCopy />{' '}
                    </div>
                  </button>

                  <button className="btn__icon btn" onClick={loadPage}>
                    <div className="icon">
                      <IoReload />{' '}
                    </div>
                  </button>

                  {!playing ? (
                    <button
                      className="btn__icon btn"
                      onClick={() => {
                        const text = document.getElementById('response').value;
                        const utterance = new SpeechSynthesisUtterance(text);
                        utterance.voice = voices[2];
                        utterance.rate = 0.9;
                        window.speechSynthesis.speak(utterance);
                        setInterval(() => {
                          speechSynthesis.pause();
                          speechSynthesis.resume();
                        }, 5000);
                        setPlaying(true);
                      }}
                    >
                      <div className="icon">
                        <FaPlay />
                      </div>
                    </button>
                  ) : (
                    <button
                      className="btn__icon btn"
                      onClick={() => {
                        window.speechSynthesis.cancel();
                        setPlaying(false);
                      }}
                    >
                      <div className="icon">
                        <FaPause />
                      </div>
                    </button>
                  )}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PostCreator;
