import NavbarRoutes from '../routes/navbar-routes';
import '../styles/navbar.css';

export const Navbar=()=>{
  return (
    <div className="navbar-main-container">
      <ul className="navbar-container">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/history" className="navbar-link">
            Workout History
          </a>
        </li>
      </ul>
      <NavbarRoutes/>
    </div>
  );
}