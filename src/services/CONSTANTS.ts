import { WORKOUT_DATA } from "../services/workout-data.ts";
import defaultImage from "../images/default-workout.jpg";

export const CONSTANT = {
  data: WORKOUT_DATA,
  INITIAL_WORKOUT: {
    id: "",
    workoutStartTime: new Date().toString().split(" ").slice(0, 5),
    workoutEndTime: new Date().toString().split(" ").slice(0, 5),
    workoutTitle: "Demo Workout",
    workoutImage: defaultImage,
    workoutRepsCount: 0,
    workoutSetsCount: 0,
    reps: 10,
  },
  MY_WORKOUT:'my_workout',

  // WORKOUT_CATEGORIES:[
  //   {
  //     title:'Chest',
  //     route:'/chest'
  //   },
  //   {
  //     title:'Back',
  //     route:'/back'
  //   },{
  //     title:'Shoulders',
  //     route:'/shoulders'
  //   },{
  //     title:'Bicep',
  //     route:'/bicep'
  //   },{
  //     title:'Tricep',
  //     route:'/tricep'
  //   },{
  //     title:'Legs',
  //     route:'/legs'
  //   }],
};
