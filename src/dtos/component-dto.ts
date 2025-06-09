import { MyWorkoutDto, WorkoutDataDto } from "./workout-dto";

export interface MyWorkoutPropsDTO {
  myWorkoutList: MyWorkoutDto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMyWorkoutList: (param: any) => void;
}

export interface WorkoutCategoryPropsDTO {
  data: WorkoutDataDto[];
  myWorkoutList: MyWorkoutDto[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setMyWorkoutList: (param: any) => void;
}

export interface SideBarComponentPropsDTO {
  workoutCategoryListProp: string[];
  setSelectedWorkoutProp:(param:string)=>void;
}

export interface CategoryPagePropsDTO {
  selectedWorkoutCategoryProp:string;
}
