import '../styles/workout-category.css';
import { WorkoutCategoryPropsDTO } from "../dtos/component-dto";
import { WorkoutDataDto } from "../dtos/workout-dto";

export const WorkoutCategory=({data, handleWorkoutCategoryClick}:WorkoutCategoryPropsDTO)=>{

  return (
    <div className="workout-container">
      {data.map((workout:WorkoutDataDto, index:number) => (
        <div
          className="each-workout-container"
          key={`${workout.id}-${index}`}
          onClick={() => handleWorkoutCategoryClick(workout)}
        >
          <img src={workout?.image} alt="" className="each-workout-image" />
          <div className="each-workout-title">{workout.title}</div>
        </div>
      ))}
    </div>
  );
}