import { useState } from 'react';
import '../styles/category-page.css';
import { CONSTANT } from '../services/CONSTANTS';
import { MyWorkoutDto, WorkoutDataDto } from '../dtos/workout-dto';
import { CategoryPagePropsDTO } from '../dtos/component-dto';
import { WorkoutCategory } from '../components/workout-category';
import { MyWorkoutList } from '../components/my-workout';

export const CategoryPage = ({
  selectedWorkoutCategoryProp = "",
  hasWorkoutProgressShownProp,
  setHasWorkoutProgressShownProp,
}: CategoryPagePropsDTO) => {
  const [data] = useState<WorkoutDataDto>(CONSTANT.data);
  const [myWorkoutList, setMyWorkoutList] = useState<MyWorkoutDto[]>([
    CONSTANT.INITIAL_WORKOUT,
  ]);

  const WorkoutCategoryTitle = selectedWorkoutCategoryProp
    ? `${selectedWorkoutCategoryProp[0].toUpperCase()}${selectedWorkoutCategoryProp.slice(
        1
      )}`
    : "";

  const handleWorkoutProgress = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setHasWorkoutProgressShownProp((prev:any) => !prev);
  };

  return (
    <div className="category-page-container">
      <button className="workout-list-button" onClick={handleWorkoutProgress}>
        {!hasWorkoutProgressShownProp
          ? "Show Workout Progress"
          : "Hide Workout Progress"}
      </button>
      {selectedWorkoutCategoryProp && (
        <>
          <h1 className="category-page-main-heading">
            Choose <span>{WorkoutCategoryTitle}</span> Workout
          </h1>
        </>
      )}
      {selectedWorkoutCategoryProp && !hasWorkoutProgressShownProp ? (
        <WorkoutCategory
          data={data[selectedWorkoutCategoryProp as keyof WorkoutDataDto]}
          myWorkoutList={myWorkoutList}
          setMyWorkoutList={setMyWorkoutList}
        />
      ) : (
        <MyWorkoutList
          myWorkoutList={myWorkoutList}
          setMyWorkoutList={setMyWorkoutList}
        />
      )}
    </div>
  );
};