import { useState } from "react";
import "../styles/home-component.css";
import { SideBarComponent } from "./sidebar-component.tsx";
import { CategoryPage } from "../pages/category-page.tsx";

export const HomeComponent = () => {
  

  const workoutCategories=['chest','back','shoulders','tricep','bicep']
  const [selectedWorkoutCategory, setSelectedWorkoutCategory] = useState<string>('');

  return (
    <div className="homepage-container right-page">
      <SideBarComponent
        workoutCategoryListProp={workoutCategories}
        setSelectedWorkoutProp={setSelectedWorkoutCategory}
        // selectedWorkoutCategoryProp={selectedWorkoutCategory}
      />
      {/* <WorkoutCategory
        data={data}
        myWorkoutList={myWorkoutList}
        setMyWorkoutList={setMyWorkoutList}
      /> */}
      <CategoryPage selectedWorkoutCategoryProp={selectedWorkoutCategory}/>

      {/* <MyWorkout
        myWorkoutList={myWorkoutList}
        setMyWorkoutList={setMyWorkoutList}
      /> */}
    </div>
  );
};
