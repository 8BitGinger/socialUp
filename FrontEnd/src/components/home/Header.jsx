import socialUpLogo from '../../assets/images/socialUpLogoNoBack2.png';

const Header = () => {
  return (
    <section className="header">
      <div>
        <img
          className="floating"
          src={socialUpLogo}
          alt="Floating Social Up Logo"
        />
      </div>
    </section>
  );
};

export default Header;
