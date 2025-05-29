import { useState } from "react";
import "../styles/homepage.css";
import { CONSTANT } from "../services/CONSTANTS.ts";
import defaultImage from "../images/default-workout.jpg";
import { MyWorkoutDto, WorkoutDataDto } from "../dtos/workout-dto.ts";

const initialMyWorkout:MyWorkoutDto = {
  id: "",
  workoutStartTime: new Date().toString().split(" ").slice(0, 5),
  workoutEndTime: new Date().toString().split(" ").slice(0, 5),
  workoutTitle: "Demo Workout",
  workoutImage: defaultImage,
  workoutReps: 0,
  workoutSets: 0,
  reps:10,
};

export const Homepage = () => {
  const [data] = useState<WorkoutDataDto[]>(CONSTANT.data);
  const [myWorkoutList, setMyWorkoutList] = useState<MyWorkoutDto[]>([
    initialMyWorkout
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
      const newWorkout = {...initialMyWorkout};
      newWorkout.workoutTitle=workoutParam?.title;
      newWorkout.workoutImage= workoutParam?.image;
      newWorkout.workoutStartTime = new Date()
        .toString()
        .split(" ")
        .slice(0, 5);
      newWorkout.workoutEndTime='Working Out!!!';
      setMyWorkoutList(prev=>[...prev, newWorkout])
    }
  };

  const handleRepChange=(isIncreaseParam:boolean,idParam:stirng)=>{

  };

  return (
    <div className="homepage-container">
      <div className="workout-title-container">
        {data.map((workout, index) => (
          <div
            onClick={() => handleWorkoutCategoryClick(workout)}
            className="each-workout-title"
            key={`${workout.id}-${index}`}
          >
            {workout.title}
          </div>
        ))}
      </div>
      <div className="my-workout-container">
        {myWorkoutList.map((myWorkout, index) => (
          <div
            className="my-each-workout-container"
            key={`${myWorkout?.workoutTitle}-${index}`}
          >
            <img
              src={myWorkout?.workoutImage}
              alt=""
              className="my-each-workout-image"
            />
            <div className="each-workout-other-details-container">
              <h1 className="my-each-workout-title">
                {myWorkout?.workoutTitle}
              </h1>
              <div className="my-each-workout-time-container workout-detail">
                <p className="my-each-workout-start-time">
                  Starts at: {myWorkout?.workoutStartTime[4]}
                </p>
                <p className="my-each-workout-end-time">
                  Ends at:{" "}
                  {Array.isArray(myWorkout?.workoutEndTime)
                    ? myWorkout?.workoutEndTime[4]
                    : myWorkout?.workoutEndTime}
                </p>
                {/* <div className="each-workout-duration">{}</div> */}
              </div>
              <div className="my-each-workout-counts workout-detail">
                <p className="my-each-workout-reps">
                  Reps:<span>{myWorkout?.workoutReps}</span>
                </p>
                <p className="my-each-workout-sets">
                  Sets:<span>{myWorkout?.workoutSets}</span>
                </p>
              </div>
              <div className="each-workout-rep-container">
                <p className="each-workout-rep-detail">{myWorkout?.reps}</p>
                <div className="each-workout-rep-buttons-container">
                  <button
                    className="each-workout-rep-increase custom-button"
                    onClick={() => handleRepChange(true, myWorkout.id)}
                  >
                    +
                  </button>
                  <button
                    className="each-workout-rep-decrease custom-button"
                    onClick={() => handleRepChange(false, myWorkout.id)}
                  >
                    -
                  </button>
                </div>
                <button className="each-workout-rep-add custom-button">
                  Add Reps
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
