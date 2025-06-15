import "../styles/my-workout-list.css";
import { MyWorkoutPropsDTO } from "../dtos/component-dto";
import { MyWorkoutDto } from "../dtos/workout-dto";
import {
  getLocallySavedData,
  saveDataLocally,
} from "../services/local-storage";
import { CONSTANT } from "../services/CONSTANTS";

export const MyWorkoutList = ({
  myWorkoutList,
  setMyWorkoutList,
}: MyWorkoutPropsDTO) => {

  /**
   * it increases or decreases the rep count for each workout
   * @param isIncreaseParam
   * @param idParam
   */
  const handleRepChange = (isIncreaseParam: boolean, idParam: string) => {
    const updatedWorkout = [...myWorkoutList];
    const workoutIndex = updatedWorkout.findIndex((w) => w.id === idParam);
    if (workoutIndex > -1) {
      if (isIncreaseParam) {
        updatedWorkout[workoutIndex].reps =
          updatedWorkout[workoutIndex].reps + 1;
      } else {
        if (updatedWorkout[workoutIndex].reps > 1) {
          updatedWorkout[workoutIndex].reps =
            myWorkoutList[workoutIndex].reps - 1;
        }
      }
    }
    setMyWorkoutList(updatedWorkout);
  };

  /**
   * it adds the reps to the current workout
   * it also increases the set
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
      saveData();
    }
  };

  /**
   * It saves workout data
   */
  const saveData = () => {
    const dateArr = new Date().toString().split(" ").slice(0, 5);
    const key = `${dateArr[0]}, ${dateArr[2]} ${dateArr[1]} ${dateArr[3]}`;
    //Here removing item at 0th index, as it will be the default initial object
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [item1, ...restData] = myWorkoutList;
    const previousSavedData = getLocallySavedData(CONSTANT.MY_WORKOUT_DATA_KEY);
    if (!previousSavedData) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const item: any = {};
      item[key] = [...restData];
      saveDataLocally(CONSTANT.MY_WORKOUT_DATA_KEY, item);
    } else {
      const updatedData = { ...previousSavedData };
      updatedData[key] = [...restData];
      saveDataLocally(CONSTANT.MY_WORKOUT_DATA_KEY, updatedData);
    }
  };


  return (
    <div className="my-workout-container">
      {myWorkoutList.length === 1 ? (
        <div className="empty-workout-list-container">
          <h1>Start Workout to See Progress!!!</h1>
        </div>
      ) : (
        myWorkoutList?.map((myWorkout: MyWorkoutDto, index: number) => {
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
        })
      )}
    </div>
  );
};
