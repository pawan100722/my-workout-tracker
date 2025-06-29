import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";
import closeIcon from '../icons/close-icon.svg';
import hamburgerIcon from "../icons/hamburger.svg";

export const Navbar = () => {
  const [isMenuIconClicked, setIsMenuIconClicked] = useState<boolean>();

  const handleMenuIconClick = () => {
    setIsMenuIconClicked((prev) => !prev);
    
  };

  // useEffect(()=>{
  //   if (isMenuIconClicked) {
  //     setTimeout(() => {
  //       setIsMenuIconClicked(() => false);
  //     }, 2500);
  //   }
  // },[isMenuIconClicked])

  const handleMenuSelect = () => {
    setIsMenuIconClicked(() => false);
  };

  return (
    <div
      className={`navbar-main-container ${
        isMenuIconClicked ? "height-auto" : "height-15"
      }`}
    >
      <ul
        className={`navbar-container  ${isMenuIconClicked ? "opacity-1" : ""}`}
      >
        <li className="navbar-item" onClick={handleMenuSelect}>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item" onClick={handleMenuSelect}>
          <Link to="/history" className="navbar-link">
            Workout History
          </Link>
        </li>
      </ul>
      <img
        src={isMenuIconClicked?closeIcon:hamburgerIcon}
        className="navbar-icon"
        alt="Navbar Icon"
        onClick={handleMenuIconClick}
      />
    </div>
  );
};
