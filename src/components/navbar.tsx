import '../styles/navbar.css';
import { Link } from 'react-router-dom';

export const Navbar=()=>{
  return (
    <div className="navbar-main-container">
      <ul className="navbar-container">
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
    </div>
  );
}