import { WORKOUT_DATA } from "../services/workout-data.ts";
import defaultImage from "../images/default-workout.jpg";

import pushupIcon from "../icons/muscle/pushup.svg";
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
    duration: 0,
  },
  MY_WORKOUT_DATA_KEY: "my_workout_tracker_history",
  USER_DETAILS_KEY: "my_workout_tracker_user_details",

  WORKOUT_CATEGORIES: [
    { title: "pushup", icon: pushupIcon },
    { title: "chest", icon: chestIcon },
    { title: "back", icon: backIcon },
    { title: "shoulders", icon: shoulderIcon },
    { title: "tricep", icon: tricepIcon },
    { title: "bicep", icon: bicepIcon },
    { title: "legs", icon: legsIcon },
  ],
};
