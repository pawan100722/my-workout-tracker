import { WORKOUT_DATA } from "../services/workout-data.ts";
import defaultImage from "../images/default-workout.jpg";

import backIcon from "../icons/muscle/back-muscle-icon.svg";
import chestIcon from "../icons/muscle/chest-muscle-icon.svg";
import bicepIcon from "../icons/muscle/bicep-muscle-icon.svg";
import tricepIcon from "../icons/muscle/tricep-muscle-icon.svg";
import shoulderIcon from "../icons/muscle/shoulder-muscle-icon.svg";
import legsIcon from "../icons/muscle/leg-muscle-icon.svg";

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
    duration:0,
  },
  MY_WORKOUT:'my_workout',

   WORKOUT_CATEGORIES : [
      "pushup",
      "chest",
      "back",
      "shoulders",
      "tricep",
      "bicep",
      "legs",
    ],

  WORKOUT_ICONS_CATEGORIES : [
      chestIcon,
      backIcon,
      shoulderIcon,
      tricepIcon,
      bicepIcon,
      legsIcon,
    ],

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
