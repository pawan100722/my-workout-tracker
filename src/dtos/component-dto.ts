import { MyWorkoutDto, WorkoutDTO } from "./workout-dto";

export interface MyWorkoutPropsDTO {
  myWorkoutList: MyWorkoutDto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMyWorkoutList: (param: any) => void;
}

export interface WorkoutCategoryPropsDTO {
  handleShowWorkoutProgress:()=>void;
  data: WorkoutDTO[];
  myWorkoutList: MyWorkoutDto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMyWorkoutList: (param: any) => void;
}

export interface SideBarComponentPropsDTO {
  workoutCategoryListProp: string[];
  setSelectedWorkoutProp: (param: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setHasWorkoutProgressShownProp:(params:any)=>any;
}

export interface RightPanelMainPagePropsDTO {
  selectedWorkoutCategoryProp: string;
  hasWorkoutProgressShownProp: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setHasWorkoutProgressShownProp: (params: any) => any;
}
