import { SideBarComponentPropsDTO } from "../dtos/component-dto";
import { CONSTANT } from "../services/CONSTANTS";
import "../styles/side-bar-component.css";

export const SideBarComponent = ({
  workoutCategoryListProp,
  setSelectedWorkoutProp,
  setHasWorkoutProgressShownProp,
}: SideBarComponentPropsDTO) => {

  const handleClick=(categoryParam:string)=>{
    setSelectedWorkoutProp(categoryParam);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    setHasWorkoutProgressShownProp(false)
  }

  return (
    <div className="side-bar-container">
      {/* <h1 className="sidebar-main-heading">Choose Workout</h1> */}
      <div className="sidebar-items-container">
        {workoutCategoryListProp?.map((catG: string, index: number) => (
          <div
            key={index}
            className="sidebar-item"
            onClick={() => handleClick(catG)}
          >
            <span>
              {catG[0].toUpperCase()}
              {catG.slice(1)}
            </span>
            <img
              className="sidebar-icon"
              src={CONSTANT.WORKOUT_ICONS_CATEGORIES[index]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
