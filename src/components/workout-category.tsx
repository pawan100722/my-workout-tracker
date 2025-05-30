import "../styles/workout-category.css";
import { CONSTANT } from "../services/CONSTANTS";
import { WorkoutDataDto } from "../dtos/workout-dto";
import { WorkoutCategoryPropsDTO } from "../dtos/component-dto";

export const WorkoutCategory = ({
  data,
  myWorkoutList,
  setMyWorkoutList,
}: WorkoutCategoryPropsDTO) => {
  /**
   * If a workout category is clicked
   * it add the new workout in the workout list
   * @param workoutParam
   */
  const handleWorkoutCategoryClick = (workoutParam: WorkoutDataDto) => {
    const isWorkoutExist = myWorkoutList.find(
      (w) => w.workoutTitle === workoutParam?.title
    );
    if (!isWorkoutExist) {
      const newWorkout = JSON.parse(JSON.stringify(CONSTANT.INITIAL_WORKOUT));
      newWorkout.id = new Date().toISOString();
      newWorkout.workoutTitle = workoutParam?.title;
      newWorkout.workoutImage = workoutParam?.image;
      newWorkout.workoutStartTime = new Date()
        .toString()
        .split(" ")
        .slice(0, 5);
      newWorkout.workoutEndTime = "Working Out!!!";
      // newWorkout.reps = 10;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setMyWorkoutList((prev: any) => [...prev, newWorkout]);
    }
  };

  return (
    <div className="workout-container">
      {data.map((workout: WorkoutDataDto, index: number) => (
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
};
