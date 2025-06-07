import "../styles/side-bar-component.css";

export const SideBarComponent = () => {
  return (
    <div className="side-bar-container">
    <h1 className="sidebar-main-heading">Choose  Workout</h1>
      <ul className="sidebar-items-container">
        <li className="sidebar-item">
          <a href="" className="sidebar-link">
            Chest
          </a>
        </li>
        <li className="sidebar-item">
          <a href="" className="sidebar-link">
            Back
          </a>
        </li>
        <li className="sidebar-item">
          <a href="" className="sidebar-link">
            Shoulders
          </a>
        </li>
        <li className="sidebar-item">
          <a href="" className="sidebar-link">
            Bicep
          </a>
        </li>
        <li className="sidebar-item">
          <a href="" className="sidebar-link">
            Legs
          </a>
        </li>
      </ul>
    </div>
  );
};
