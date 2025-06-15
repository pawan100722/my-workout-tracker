import { MyWorkoutDto, WorkoutDTO } from "./workout-dto";

export interface MyWorkoutPropsDTO {
  myWorkoutList: MyWorkoutDto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMyWorkoutList: (param: any) => void;
}

export interface WorkoutCategoryPropsDTO {
  handleShowWorkoutProgress: () => void;
  data: WorkoutDTO[];
  myWorkoutList: MyWorkoutDto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMyWorkoutList: (param: any) => void;
}

export interface SideBarComponentPropsDTO {
  workoutCategoryListProp: WorkoutCategoryDTO[];
  setSelectedWorkoutProp: (param: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setHasWorkoutProgressShownProp: (params: any) => any;
}

export interface WorkoutCategoryDTO {
  title: string;
  icon: string;
}

export interface RightPanelMainPagePropsDTO {
  selectedWorkoutCategoryProp: string;
  hasWorkoutProgressShownProp: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setHasWorkoutProgressShownProp: (params: any) => any;
}

export interface HistoryComponentPropsDTO {
  historyComponentDataProp: MyWorkoutDto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gotoPreviousPageProp: (params: any) => boolean | void;

  setWorkoutDayProp: (param: string) => void;
}
