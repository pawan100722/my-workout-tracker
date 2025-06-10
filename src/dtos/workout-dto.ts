export interface WorkoutDataDto{
  pushup:WorkoutDTO[],
  chest:WorkoutDTO[],
  back:WorkoutDTO[],
  shoulders:WorkoutDTO[],
  bicep:WorkoutDTO[],
  tricep:WorkoutDTO[],
  legs:WorkoutDTO[],
}

export interface WorkoutDTO {
  id: number;
  title: string;
  image: string;
}

export interface MyWorkoutDto {
  id: string;
  workoutStartTime: string[];
  workoutEndTime: string[]|string;
  workoutTitle: string;
  workoutImage: string;
  workoutRepsCount: number;
  workoutSetsCount: number;
  reps:number;
  duration:number;
}

export interface WorkoutCategoryListDTO{
  title:string;
  route:string;
}