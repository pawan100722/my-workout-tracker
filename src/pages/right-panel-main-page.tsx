import { useState } from "react";
import "../styles/right-panel-main-page.css";
import deleteIcon from '../icons/delete-icon.svg';
import { CONSTANT } from "../services/CONSTANTS.ts";
import { MyWorkoutDto, WorkoutDataDto } from "../dtos/workout-dto.ts";
import { RightPanelMainPagePropsDTO } from "../dtos/component-dto.ts";
import { WorkoutCategory } from "../components/workout-category.tsx";
import { MyWorkoutList } from "../components/my-workout-list.tsx";
import { clearLocallySavedData } from "../services/local-storage.ts";

export const RightPanelMainPage = ({
  selectedWorkoutCategoryProp = "",
  hasWorkoutProgressShownProp,
  setHasWorkoutProgressShownProp,
}: RightPanelMainPagePropsDTO) => {
  const [data] = useState<WorkoutDataDto>(CONSTANT.data);
  const [myWorkoutList, setMyWorkoutList] = useState<MyWorkoutDto[]>([
    CONSTANT.INITIAL_WORKOUT,
  ]);

  const [isResetButtonClicked, setIsResetButtonClicked]= useState<boolean>(false);

  const WorkoutCategoryTitle = selectedWorkoutCategoryProp
    ? `${selectedWorkoutCategoryProp[0].toUpperCase()}${selectedWorkoutCategoryProp.slice(
        1
      )}`
    : "";

  /**
   * it handles the functionality
   * where is workout progress list is shown, it hides it or vice-versa
   *
   */
  const handleShowWorkoutProgress = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setHasWorkoutProgressShownProp((prev: any) => !prev);
  };

  const handleResetClick=()=>{
    setIsResetButtonClicked(()=>true);
  };

  const handleCancelResetClick=()=>{
    setIsResetButtonClicked(()=>false)
  };

  const handleResetConfirmClick=()=>{
    clearLocallySavedData(CONSTANT.USER_DETAILS_KEY);
    clearLocallySavedData(CONSTANT.USER_DETAILS_KEY);
    setIsResetButtonClicked(()=>false);
    window.location.reload();
  }

  return (
    <div className="category-page-container">
      <div className="category-page-options">
        <button
          className={`workout-list-button ${
            myWorkoutList.length === 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleShowWorkoutProgress}
          disabled={myWorkoutList.length === 1}
        >
          {!hasWorkoutProgressShownProp ? "See Progress" : "Hide Progress"}
        </button>
        <button
          className="app-reset-button cursor-pointer"
          title="Reset App Data!"
        >
          <img src={deleteIcon} onClick={handleResetClick} />
        </button>
      </div>
      <div
        className={`reset-app-warning-container cursor-pointer ${
          isResetButtonClicked ? "opacity-1 position-absolute" : "opacity-none position-absolute-negative"
        }`}
      >
        <span onClick={handleCancelResetClick}>&times;</span>
        <h2 className="warning-text">
          Are you Sure You want to reset the App? You will loose your data. This
          can not be undone
        </h2>
        <div className="warning-buttons-container">
          <button
            className=" warning-button cursor-pointer warning-confirm-button"
            onClick={handleResetConfirmClick}
          >
            Confirm
          </button>
          <button
            className="warning-button cursor-pointer warning-cancel-button"
            onClick={handleCancelResetClick}
          >
            Cancel
          </button>
        </div>
      </div>
      {selectedWorkoutCategoryProp && !hasWorkoutProgressShownProp ? (
        <>
          <h1 className="category-page-main-heading">
            Choose <span>{WorkoutCategoryTitle}</span> Workout
          </h1>
          <div>
            <WorkoutCategory
              data={data[selectedWorkoutCategoryProp as keyof WorkoutDataDto]}
              handleShowWorkoutProgress={handleShowWorkoutProgress}
              myWorkoutList={myWorkoutList}
              setMyWorkoutList={setMyWorkoutList}
            />
          </div>
        </>
      ) : (
        <MyWorkoutList
          myWorkoutList={myWorkoutList}
          setMyWorkoutList={setMyWorkoutList}
        />
      )}
    </div>
  );
};
