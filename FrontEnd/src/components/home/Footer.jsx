import { Link } from 'react-router-dom';
import geminiLogo from '../../assets/images/geminiBase.png';

const Footer = () => {
  return (
    <section className="footer">
      <img src={geminiLogo} alt="Gemini Inspired Logo" />

      <Link to="https://gemini.google.com">
        <h1>Powered by Gemini</h1>
      </Link>
    </section>
  );
};

export default Footer;
