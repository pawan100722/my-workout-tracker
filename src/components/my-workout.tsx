import '../styles/my-workout.css';
import { MyWorkoutPropsDTO } from "../dtos/component-dto";
import { MyWorkoutDto } from "../dtos/workout-dto";

export const MyWorkout =({myWorkoutList, handleRepChange, handleAddReps}:MyWorkoutPropsDTO)=>{
  
  return (
    <div className="my-workout-container">
      {myWorkoutList.map((myWorkout:MyWorkoutDto, index:number) => {
        if (index > 0) {
          return (
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
                <div className="my-each-workout-time-container my-each-workout-detail">
                  <p className="my-each-workout-start-time">
                    Starts at: <span>{myWorkout?.workoutStartTime[4]}</span>
                  </p>
                  {/* <p className="my-each-workout-end-time">
                Ends at: <span>{myWorkout?.workoutStartTime[4]}</span>
              </p> */}
                  {/* <div className="each-workout-duration">{}</div> */}
                </div>
                <div className="my-each-workout-counts my-each-workout-detail">
                  <p className="my-each-workout-reps">
                    Total Reps:<span>{myWorkout?.workoutRepsCount}</span>
                  </p>
                  <p className="my-each-workout-sets">
                    Total Sets:<span>{myWorkout?.workoutSetsCount}</span>
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
                  <button
                    className="each-workout-rep-add custom-button"
                    onClick={() => handleAddReps(myWorkout?.id)}
                  >
                    Add Reps
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}