import { Link } from "react-router-dom";
import "../styles/side-bar-component.css";
import { CONSTANT } from "../services/CONSTANTS";
import { WorkoutCategoryListDTO } from "../dtos/workout-dto";

export const SideBarComponent = () => {
  return (
    <div className="side-bar-container">
      <h1 className="sidebar-main-heading">Choose Workout</h1>
      <ul className="sidebar-items-container">
        {CONSTANT.WORKOUT_CATEGORIES.map(
          (workout: WorkoutCategoryListDTO, index) => (
            <li className="sidebar-item" key={index}>
              <Link to={workout?.route} className="sidebar-link">
                {workout?.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
