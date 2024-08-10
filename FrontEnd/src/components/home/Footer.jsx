import { Link } from 'react-router-dom';
import geminiLogo from '../../assets/images/geminiBase2.png';

const Footer = () => {
  return (
    <section className="footer">
      <img src={geminiLogo} alt="Gemini Inspired Logo" />
      <Link to="https://gemini.google.com">
        <h1>Powered by Gemini</h1>
      </Link>{' '}
      <div className="warning">
        Gemini may display inaccurate info, including about people, so
        double-check its responses.
      </div>
    </section>
  );
};

export default Footer;
