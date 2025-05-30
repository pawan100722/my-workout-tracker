import { useState } from "react";
import "../styles/homepage.css";
import { CONSTANT } from "../services/CONSTANTS.ts";
import defaultImage from "../images/default-workout.jpg";
import { MyWorkoutDto, WorkoutDataDto } from "../dtos/workout-dto.ts";
import { MyWorkout } from "./my-workout.tsx";
import { WorkoutCategory } from "./workout-category.tsx";

const initialMyWorkout: MyWorkoutDto = {
  id: "",
  workoutStartTime: new Date().toString().split(" ").slice(0, 5),
  workoutEndTime: new Date().toString().split(" ").slice(0, 5),
  workoutTitle: "Demo Workout",
  workoutImage: defaultImage,
  workoutRepsCount: 0,
  workoutSetsCount: 0,
  reps: 10,
};

export const Homepage = () => {
  const [data] = useState<WorkoutDataDto[]>(CONSTANT.data);
  const [myWorkoutList, setMyWorkoutList] = useState<MyWorkoutDto[]>([
    initialMyWorkout,
  ]);

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
      const newWorkout = { ...initialMyWorkout };
      newWorkout.id = new Date().toISOString();
      newWorkout.workoutTitle = workoutParam?.title;
      newWorkout.workoutImage = workoutParam?.image;
      newWorkout.workoutStartTime = new Date()
        .toString()
        .split(" ")
        .slice(0, 5);
      newWorkout.workoutEndTime = "Working Out!!!";
      newWorkout.reps = 10;
      setMyWorkoutList((prev) => [...prev, newWorkout]);
    }
  };

  /**
   * it increases or decreases the rep count for each workout
   * @param isIncreaseParam
   * @param idParam
   */
  const handleRepChange = (isIncreaseParam: boolean, idParam: string) => {
    const updatedWorkout = [...myWorkoutList];
    const workoutIndex = updatedWorkout.findIndex((w) => w.id === idParam);
    console.log(workoutIndex);
    if (workoutIndex > -1) {
      if (isIncreaseParam) {
        updatedWorkout[workoutIndex].reps =
          updatedWorkout[workoutIndex].reps + 1;
      } else {
        if (updatedWorkout[workoutIndex].reps > 0) {
          updatedWorkout[workoutIndex].reps =
            myWorkoutList[workoutIndex].reps - 1;
        }
      }
    }
    setMyWorkoutList(updatedWorkout);
  };

  /**
   * it adds the reps to the rep counter
   * @param idParam
   */
  const handleAddReps = (idParam: string) => {
    const updatedWorkoutList: MyWorkoutDto[] = [...myWorkoutList];
    const index = updatedWorkoutList.findIndex((w) => w.id === idParam);
    if (index > -1) {
      updatedWorkoutList[index].workoutRepsCount +=
        updatedWorkoutList[index].reps;
      updatedWorkoutList[index].workoutSetsCount =
        updatedWorkoutList[index].workoutSetsCount + 1;
      updatedWorkoutList[index].reps = 10;
      setMyWorkoutList(updatedWorkoutList);
    }
  };

  return (
    <div className="homepage-container">
      <WorkoutCategory data={data} handleWorkoutCategoryClick={handleWorkoutCategoryClick}/>

      <MyWorkout myWorkoutList={myWorkoutList} handleRepChange={handleRepChange} handleAddReps={handleAddReps}/>
      
    </div>
  );
};
