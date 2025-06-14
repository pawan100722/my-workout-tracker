import { useState } from "react";
import "../styles/home-component.css";
import { SideBarComponent } from "./sidebar-component.tsx";
import { RightPanelMainPage } from "../pages/right-panel-main-page.tsx";
import { CONSTANT } from "../services/CONSTANTS.ts";

export const HomeComponent = () => {
  
  const [selectedWorkoutCategory, setSelectedWorkoutCategory] =
    useState<string>("");

  const [hasWorkoutProgressShown, setHasWorkoutProgressShown] =
    useState<boolean>(false);


  return (
    <div className="homepage-container right-page">
      <SideBarComponent
        workoutCategoryListProp={CONSTANT.WORKOUT_CATEGORIES}
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
