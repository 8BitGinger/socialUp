import React, { useState } from 'react';
import '../../assets/css/postGen.css';
import mediaIconsLogo from '../../assets/images/mediaIconsLogos.jpg';

import toneIcons from '../../assets/images/toneIcons.jpg';
import audienceIcons from '../../assets/images/audienceIcons.jpg';

import postIcons from '../../assets/images/postIcons.jpg';
import SocialRow from './postGen/SocialRow';
import ToneRow from './postGen/ToneRow';
import AvatarRow from './postGen/AvatarRow';

const PostCreator = () => {
  return (
    <section className="generator__container">
      <img src={mediaIconsLogo} alt="Social Media Icon Banner" />
      <form className="post-container">
        <SocialRow />
        <img src={toneIcons} alt="Emoji Icon Banner" />

        <ToneRow />
        <img src={audienceIcons} alt="Avatar Icon Banner" />

        <AvatarRow />
        <img src={postIcons} alt="Social Media Icon Banner" />
        <div className="post_text">
          <textarea placeholder="Your Post Here" />
        </div>
        <div className="btn__holder">
          <button className="btn btn__create">Create Post</button>
        </div>
      </form>
    </section>
  );
};

export default PostCreator;
