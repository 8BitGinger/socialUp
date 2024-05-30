import hero from '../../assets/images/socialLogoColor.jpg';

const Header = () => {
  return (
    <section className="header">
      <div>
        <img src={hero} alt="hero image" />
        <h3 className="floating">
          <span> Upscale</span> your Social Media Game!
        </h3>
      </div>
    </section>
  );
};

export default Header;
