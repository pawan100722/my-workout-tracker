import { useState } from 'react';
import '../styles/category-page.css';
import { CONSTANT } from '../services/CONSTANTS';
import { MyWorkoutDto, WorkoutDataDto } from '../dtos/workout-dto';
import { CategoryPagePropsDTO } from '../dtos/component-dto';
import { WorkoutCategory } from '../components/workout-category';

export const CategoryPage = ({ selectedWorkoutCategoryProp='' }:CategoryPagePropsDTO) => {

  const [data] = useState<WorkoutDataDto>(CONSTANT.data);
  const [myWorkoutList, setMyWorkoutList] = useState<MyWorkoutDto[]>([
    CONSTANT.INITIAL_WORKOUT,
  ]);

  const WorkoutCategoryTitle = selectedWorkoutCategoryProp?`${selectedWorkoutCategoryProp[0].toUpperCase()}${selectedWorkoutCategoryProp.slice(
    1
  )}`:'';

  console.log();
  
 

  return (
    <div className="category-page-container">
      {selectedWorkoutCategoryProp && (
        <>
          <h1 className="category-page-main-heading">
            Choose <span>{WorkoutCategoryTitle}</span> Workout
          </h1>
          <WorkoutCategory
            data={data[selectedWorkoutCategoryProp as keyof WorkoutDataDto]}
            myWorkoutList={myWorkoutList}
            setMyWorkoutList={setMyWorkoutList}
          />
        </>
      )}
    </div>
  );
};