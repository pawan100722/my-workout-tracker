export interface WorkoutDataDto{
  id: number;
  title: string;
  image:string;
}

export interface MyWorkoutDto {
  id: string;
  workoutStartTime: string[];
  workoutEndTime: string[]|string;
  workoutTitle: string;
  workoutImage: string;
  workoutReps: number;
  workoutSets: number;
  reps:number
}