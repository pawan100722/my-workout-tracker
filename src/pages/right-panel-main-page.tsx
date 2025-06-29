import { useState } from "react";
import "../styles/right-panel-main-page.css";
import deleteIcon from '../icons/delete-icon.svg';
import { CONSTANT } from "../services/CONSTANTS.ts";
import { MyWorkoutDto, WorkoutDataDto } from "../dtos/workout-dto.ts";
import { RightPanelMainPagePropsDTO } from "../dtos/component-dto.ts";
import { WorkoutCategory } from "../components/workout-category.tsx";
import { MyWorkoutList } from "../components/my-workout-list.tsx";

export const RightPanelMainPage = ({
  selectedWorkoutCategoryProp = "",
  hasWorkoutProgressShownProp,
  setHasWorkoutProgressShownProp,
}: RightPanelMainPagePropsDTO) => {
  const [data] = useState<WorkoutDataDto>(CONSTANT.data);
  const [myWorkoutList, setMyWorkoutList] = useState<MyWorkoutDto[]>([
    CONSTANT.INITIAL_WORKOUT,
  ]);

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
        <button className="app-reset-button cursor-pointer" title="Reset App Data!"><img src={deleteIcon}/></button>
      </div>
      {selectedWorkoutCategoryProp && !hasWorkoutProgressShownProp ? (
        <>
          <h1 className="category-page-main-heading">
            Choose <span>{WorkoutCategoryTitle}</span> Workout
          </h1>
          <WorkoutCategory
            data={data[selectedWorkoutCategoryProp as keyof WorkoutDataDto]}
            handleShowWorkoutProgress={handleShowWorkoutProgress}
            myWorkoutList={myWorkoutList}
            setMyWorkoutList={setMyWorkoutList}
          />
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
