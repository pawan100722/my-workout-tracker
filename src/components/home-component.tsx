import { useState } from "react";
import "../styles/home-component.css";
import { SideBarComponent } from "./sidebar-component.tsx";
import { CategoryPage } from "../pages/category-page.tsx";

export const HomeComponent = () => {
  

  const workoutCategories=['pushup','chest','back','shoulders','tricep','bicep','legs']
  const [selectedWorkoutCategory, setSelectedWorkoutCategory] = useState<string>('');

  return (
    <div className="homepage-container right-page">
      <SideBarComponent
        workoutCategoryListProp={workoutCategories}
        setSelectedWorkoutProp={setSelectedWorkoutCategory}
      />
      <CategoryPage selectedWorkoutCategoryProp={selectedWorkoutCategory}/>
    </div>
  );
};
