import "../styles/side-bar-component.css";
import { SideBarComponentPropsDTO, WorkoutCategoryDTO } from "../dtos/component-dto";

export const SideBarComponent = ({
  workoutCategoryListProp,
  setSelectedWorkoutProp,
  setHasWorkoutProgressShownProp,
}: SideBarComponentPropsDTO) => {

  const handleClick=(categoryParam:WorkoutCategoryDTO)=>{
    setSelectedWorkoutProp(categoryParam?.title);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    setHasWorkoutProgressShownProp(()=>false)
  }

  return (
    <div className="side-bar-container">
      {/* <h1 className="sidebar-main-heading">Choose Workout</h1> */}
      <div className="sidebar-items-container">
        {workoutCategoryListProp?.map(
          (catG: WorkoutCategoryDTO, index: number) => (
            <div
              key={index}
              className="sidebar-item"
              onClick={() => handleClick(catG)}
            >
              <span>
                {catG?.title[0].toUpperCase()}
                {catG?.title.slice(1)}
              </span>
              <img
                className="sidebar-icon"
                src={catG?.icon}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
