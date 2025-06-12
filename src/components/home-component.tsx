import { useState } from "react";
import "../styles/home-component.css";
import { SideBarComponent } from "./sidebar-component.tsx";
import { RightPanelMainPage } from "../pages/right-panel-main-page.tsx";

export const HomeComponent = () => {
  const workoutCategories = [
    "pushup",
    "chest",
    "back",
    "shoulders",
    "tricep",
    "bicep",
    "legs",
  ];
  const [selectedWorkoutCategory, setSelectedWorkoutCategory] =
    useState<string>("");

  const [hasWorkoutProgressShown, setHasWorkoutProgressShown] =
    useState<boolean>(false);


  return (
    <div className="homepage-container right-page">
      <SideBarComponent
        workoutCategoryListProp={workoutCategories}
        setSelectedWorkoutProp={setSelectedWorkoutCategory}
        setHasWorkoutProgressShownProp={setHasWorkoutProgressShown}
      />
      <RightPanelMainPage
        selectedWorkoutCategoryProp={selectedWorkoutCategory}
        hasWorkoutProgressShownProp={hasWorkoutProgressShown}
        setHasWorkoutProgressShownProp={setHasWorkoutProgressShown}
      />
    </div>
  );
};

export {};
