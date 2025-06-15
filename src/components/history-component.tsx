import "../styles/history-component.css";
import { MyWorkoutDto } from "../dtos/workout-dto";
import { HistoryComponentPropsDTO } from "../dtos/component-dto";

export const HistoryComponent = ({
  historyComponentDataProp,
  gotoPreviousPageProp,
  setWorkoutDayProp,
}: HistoryComponentPropsDTO) => {
  const handleBackClick = () => {
    gotoPreviousPageProp(() => false);
    setWorkoutDayProp('');
  };

  return (
    <div className="history-component-main-container">
      <button
        className="history-component-back-button"
        onClick={handleBackClick}
      >
        Back
      </button>
      {historyComponentDataProp?.map((history: MyWorkoutDto, indx: number) => (
        <div className="each-history-component-data" key={indx}>
          <img
            className="workout-component-image"
            src={history?.workoutImage}
            alt={`${history?.workoutTitle}-image`}
          />
          <div>
            <p className="workout-component-title">
              Workout Name:
              <span>{history?.workoutTitle}</span>
            </p>
            <p className="workout-component-duration">
              Workout Duration:<span>{history?.duration}</span>
            </p>
            <p className="workout-component-reps">
              Workout Reps: <span>{history?.reps}</span>
            </p>
            <p className="workout-component-sets">
              Workout Sets <span>{history?.workoutSetsCount}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
