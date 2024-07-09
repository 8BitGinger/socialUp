// Standard Imports
import { useContext, useState } from 'react';

import { Context } from '../../context/Context';
import '../../assets/css/postGen.css';
import  uniq from 'underscore/modules/uniq.js';

// import images
import mediaIconsLogo from '../../assets/images/mediaIconsLogos.jpg';
import toneIcons from '../../assets/images/toneIcons.jpg';
import audienceIcons from '../../assets/images/audienceIcons.jpg';
import postIcons from '../../assets/images/postIcons.jpg';

// import components
import LayoutRow from './LayoutRow';

// import helpers

// import icons
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';



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

  const [post, setPost] = useState({
    social: [],
    tone: [],
    audience: [],
    content: '',

  });

  

  const handleKeyword = (e) => {
  
    const { value } = e.target;
    setCustomKeyword(value)
    

  }

  const handleContent = (e) => {
  
    const { value } = e.target;
    setCustomContent(value)
    

  }

  const handleSocialChange = (e) => {
    const { name, value } = e.target;
    const newValue = value + ", " + post.social;
    setPost({
      ...post,
      [name]: newValue
    });
  
    console.log(post);
  }

  const handleToneChange = (e) => {
    
    const { name, value } = e.target;
   
    const newValue = value + ', ' + post.tone
    setPost({
      ...post,
      [name]: newValue
    });
    console.log(post);
  }

  const addKeyword = (e) => {
    e.preventDefault();
    const newValue = customKeyword + ", " + post.tone;
    setPost({
      ...post,
      tone: newValue
    });
    console.log(post);
  }

  const handleAudienceChange = (e) => {
    const { name, value } = e.target;
    const newValue = value + ", " + post.audience;
    setPost({
      ...post,
      [name]: newValue
    });
    console.log(post);
  }

  const addCustomContent = (e) => {
    e.preventDefault();
    setPost({
      ...post,
      content: customContent
    });
    console.log(post);
  }

  const loadPage = () => {
    window.location.reload();
    window.location.top();
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newSocial = uniq(post.social.split(', '));
    const newTone = uniq(post.tone.split(', '));
    const newAudience = uniq(post.audience.split(', '));

    let finalPost = `
I want to create a social Media post that is:
shared on these platforms: ${newSocial}
The tone of the post is: ${newTone}
The target audience is: ${newAudience}
The basic content of the post should sound like: ${post.content}

I would like the response to be in this format:
Platform: (platform name here)
Post: (post text for selected platform here)
`

   console.log(finalPost);
   setPostPreview(true)
   const sendPost = JSON.stringify(finalPost)
    onSent(sendPost);
    






  
    
  
  
    
  }



  return (
    <>
    <section className="generator__container">
    {!showResult ?  
      <form className="post-container">

        <LayoutRow name='social' title="Where would you to share?" image={mediaIconsLogo} imageAlt='Social Media Icons'>
          
          <div className="row_4">
          <input
            type="checkbox"
            id="facebook"
            name="social"
            value="facebook"
            onChange={handleSocialChange}
          />
          <label htmlFor='facebook'>
            <FaFacebookF />
            <span className='social_word'>Facebook</span>
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
          <label htmlFor='instagram'>
            <FaInstagram />
            <span className='social_word'>Instagram</span>
          </label>{' '}
      </div>
      <div className="row_4">
          <input type="checkbox" id="twitter" name="social" value="twitter" onChange={handleSocialChange}/>
          <label htmlFor='twitter'>
            <FaXTwitter />
            <span className='social_word'>Twitter</span>
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
          <label htmlFor='linkedin'>
          <FaLinkedinIn />
            <span className='social_word'>LinkedIn</span>
          </label>{' '}
          </div>
        </LayoutRow>
      

        <LayoutRow name='tone' title="What's the tone of the post?" image={toneIcons} imageAlt='Emoji Icons'>
        <div className="keywords_select column">
        <div className=" tone row">
          <div className="row_2">
            <input
              type="checkbox"
              id="business"
              name='tone'
              value="business"
              onChange={handleToneChange}
            />
            <label htmlFor='business'>Professional</label>
          </div>

          <div className="row_2">
            <input type="checkbox" id="casual" name="tone" value="casual" onChange={handleToneChange}/>
            <label htmlFor='casual'> Casual</label>
            </div>
            <div className="row_2">

            <input type="checkbox" id="fun" name="tone" value="fun" onChange={handleToneChange}/>
            <label htmlFor='fun'> Fun</label>

          </div>
      

          <div className="row_2">
            <input
              type="checkbox"
              id="serious"
             name='tone'
              value="serious"
              onChange={handleToneChange}
            />
            <label htmlFor='serious'>Serious</label>
            </div>
            <div className="row_2">
              <input
              type="checkbox"
              id="reflective"
              name='tone'
              value="reflective"
              onChange={handleToneChange}
              />
              <label htmlFor='reflective'>Reflective</label>
            </div>

            <div className="row_2">
            <input
              type="checkbox"
              id="excited"
              name='tone'
              value="excited"
              onChange={handleToneChange}
            />
            <label htmlFor='excited'>Excited</label>
            </div>

        </div>
        <div className="row_1">
        <input type="text" id="select_custom" placeholder="Enter Your Own!" name='tone' onChange={handleKeyword} value={customKeyword}/>
        <button className='btn btn__add' onClick={addKeyword}>Add Keywords</button>
        </div>
        <p>Separate Keywords by Commas!</p>
      </div>
      
        </LayoutRow>


        <LayoutRow name='audience' title="Choose Your Target Audience" image={audienceIcons} imageAlt='Diverse Avatars'>
        <div className="row_3">
        <input type="checkbox" id="general" name="audience" value="general" onChange={handleAudienceChange}/>
        <label htmlFor='general'>General</label>
        </div>
        <div className="row_3">
          <input
            type="checkbox"
            id="young_adults"
            name="audience"
            value="young"
            onChange={handleAudienceChange}
          />
        <label htmlFor='young_adults'>young Adults</label>
        </div>
          <div className="row_3">
          <input type="checkbox" id="seniors" name="audience" value="seniors" onChange={handleAudienceChange}/>
          <label htmlFor='seniors'>Seniors</label>

          </div>
        </LayoutRow>


       

        <LayoutRow name='post' title="Create Your Post" image={postIcons} imageAlt='Social Media Icons'>

        <div className="post_text">
          <textarea placeholder="Your Post Here" onChange={handleContent}/>
          <button className='btn btn__add' onClick={addCustomContent}>Add Content</button>

        </div>

        </LayoutRow>

        <div className="btn__holder">
          <button className="btn btn__create"  onClick={handleSubmit}>Generate Upscaled Post</button>
        </div>

      </form>
      :   
      <div className='post__container'>
        
        {resultsData}

        {!loading ? <button className='btn btn__new' onClick={loadPage}>Start Over?</button> : 
      
        <h2 >loading... please wait</h2>
       }
     
      </div>}


    </section>
    
    
      

      </>
  );
};

export default PostCreator;
