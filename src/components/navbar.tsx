import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useContext, useState } from "react";
import closeIcon from "../icons/close-icon.svg";
import hamburgerIcon from "../icons/hamburger.svg";
import { UserDetailsContext } from "../services/contexts";
import { UserDetailsContextDTO } from "../dtos/common-dtos";

export const Navbar = () => {
  const [isMenuIconClicked, setIsMenuIconClicked] = useState<boolean>();
  const userDetailsContext: UserDetailsContextDTO = useContext(UserDetailsContext);
  const {userData, isGuestLogin} = userDetailsContext;

  const handleMenuIconClick = () => {
    setIsMenuIconClicked((prev) => !prev);
  };

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
      <div className="navbar-user-details">
        <p>
          Welcome,<span>{isGuestLogin?'Guest':userData?.name}</span>
        </p>
      </div>
      <img
        src={isMenuIconClicked ? closeIcon : hamburgerIcon}
        className="navbar-icon"
        alt="Navbar Icon"
        onClick={handleMenuIconClick}
      />
    </div>
  );
};
