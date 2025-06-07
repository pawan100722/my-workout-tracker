import { useState } from "react";
import "../styles/home-component.css";
import { MyWorkout } from "./my-workout.tsx";
import { CONSTANT } from "../services/CONSTANTS.ts";
import { WorkoutCategory } from "./workout-category.tsx";
import { MyWorkoutDto, WorkoutDataDto } from "../dtos/workout-dto.ts";

export const HomeComponent = () => {
  const [data] = useState<WorkoutDataDto[]>(CONSTANT.data);
  const [myWorkoutList, setMyWorkoutList] = useState<MyWorkoutDto[]>([
    CONSTANT.INITIAL_WORKOUT,
  ]);

  return (
    <div className="homepage-container right-page">
      <WorkoutCategory
        data={data}
        myWorkoutList={myWorkoutList}
        setMyWorkoutList={setMyWorkoutList}
      />

      <MyWorkout
        myWorkoutList={myWorkoutList}
        setMyWorkoutList={setMyWorkoutList}
      />
    </div>
  );
};
