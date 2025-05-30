import { MyWorkoutDto, WorkoutDataDto } from "./workout-dto";

export interface MyWorkoutPropsDTO {
  myWorkoutList: MyWorkoutDto[];
  handleRepChange:(param1:boolean,param2:string)=>void;
  handleAddReps:(param:string)=>void;
}

export interface WorkoutCategoryPropsDTO {
  data:WorkoutDataDto[];
  handleWorkoutCategoryClick:(param:WorkoutDataDto)=>void;
}