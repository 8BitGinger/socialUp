import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';

const SocialRow = () => {
  return (
    <>
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
          <input type="checkbox" id="twitter" name="twitter" value="twitter" />
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
    </>
  );
};

export default SocialRow;
