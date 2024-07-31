import { Link } from 'react-router-dom';
import geminiLogo from '../../assets/images/geminiBase2.png';

const Footer = () => {
  return (
    <section className="footer">
      <img src={geminiLogo} alt="Gemini Inspired Logo" />

      <Link to="https://gemini.google.com">
        <h1>
          <a href="https://gemini.google.com/app" target="_blank">
            Powered by Gemini
          </a>
        </h1>
      </Link>
    </section>
  );
};

export default Footer;
