import React from 'react';
import { Link } from 'react-router-dom';
import { RiHomeHeartFill } from 'react-icons/ri';
import { BsEnvelopeAtFill } from "react-icons/bs";

import { RiQuestionnaireFill } from 'react-icons/ri';
// import { FaUserAstronaut } from 'react-icons/fa';

// import { GrLogin } from 'react-icons/gr';

import '../assets/css/navbar.css';

const NavBar = () => {
  window.scrollTo(0, 0);
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__link">
        <RiHomeHeartFill />
      </Link>
      <Link to="/about" className="navbar__link">
        <RiQuestionnaireFill />
      </Link>
      <Link to="/contact" className="navbar__link">
      <BsEnvelopeAtFill />


      </Link>
      {/* <Link to="/login" className="navbar__link">
        <GrLogin />
      </Link> */}
    </nav>
  );
};

export default NavBar;
