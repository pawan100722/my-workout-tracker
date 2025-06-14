import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import hamburgerIcon from '../icons/hamburger.svg';
import {  useState } from 'react';

export const Navbar=()=>{
  const [isMenuIconClicked, setIsMenuIconClicked] = useState<boolean>();

  const handleMenuIconClick=()=>{
  setIsMenuIconClicked(prev=>!prev);
  };

  
  return (
    <div
      className={`navbar-main-container ${
        isMenuIconClicked ? "height-auto" : "height-15"
      }`}
    >
      <ul
        className={`navbar-container  ${
          isMenuIconClicked ? "opacity-1" : ""
        }`}
        // style={{
        //   height: "15%",
        //   transition: "height 1s linear",
        // }}
      >
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/history" className="navbar-link">
            Workout History
          </Link>
        </li>
      </ul>
      <img
        src={hamburgerIcon}
        className="navbar-icon"
        alt="Navbar Icon"
        onClick={handleMenuIconClick}
      />
    </div>
  );
}