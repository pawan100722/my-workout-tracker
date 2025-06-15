import { useState } from "react";
import "../styles/workout-history.css";
import { getLocallySavedData } from "../services/local-storage";
import { CONSTANT } from "../services/CONSTANTS";
import { MyWorkoutDto } from "../dtos/workout-dto";
import { HistoryComponent } from "../components/history-component";

export const WorkoutHistory = () => {
  const [historyData] = useState(() =>
    getLocallySavedData(CONSTANT.MY_WORKOUT_DATA_KEY)
  );

  const [historyComponentData, setHistoryComponentData] = useState<MyWorkoutDto[]>([CONSTANT.INITIAL_WORKOUT]);

  const [workoutDay, setWorkoutDay] = useState<string>('');

  const [isHistoryClicked, setIsHistoryClicked] = useState<boolean>(false);

  /**
   * When any history date is clicked
   * this methods sets the history data for that date in the state
   * and the state data will wi sent to the history component
   * @param dateParam 
   */
  const handleClick=(dateParam:string)=>{
    setHistoryComponentData(()=> historyData[dateParam]);
    setIsHistoryClicked(()=> true);
    setWorkoutDay(dateParam)
  };

  return (
    <>
      <p className="workout-history-main-heading">{workoutDay}</p>
      <div className="workout-history-main-container">
        {isHistoryClicked ? (
          <HistoryComponent
            historyComponentDataProp={historyComponentData}
            gotoPreviousPageProp={setIsHistoryClicked}
            setWorkoutDayProp={setWorkoutDay}
          />
        ) : (
          Object.keys(historyData)?.map((date: string, index: number) => (
            <div
              onClick={() => handleClick(date)}
              key={index}
              className="each-history-container"
            >
              {date}
            </div>
          ))
        )}
      </div>
    </>
  );
};
