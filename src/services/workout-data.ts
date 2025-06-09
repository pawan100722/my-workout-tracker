// import defaultWorkoutImg from '../images/default-workout.jpg';
import pushupImg from '../images/workout/chest/push-up.jpg';
import inclinePushupImg from '../images/workout/chest/incline-pushup.jpg';
import declinePushupImg from '../images/workout/chest/decline-pushup.jpg';
import bodyWeightSquatImg from '../images/workout/bodyweight-squat.png';
import dumbellBicepCurlImg from '../images/workout/dumbell-bicep-curl.webp';

export const WORKOUT_DATA = {
  pushup: [
    {
      id: 1,
      title: "Push Up",
      image: pushupImg,
    },
    {
      id: 3,
      title: "Incline Pushup",
      image: inclinePushupImg,
    },
    {
      id: 4,
      title: "Decline Pushup",
      image: declinePushupImg,
    },
  ],
  chest: [],
  back: [],
  shoulders: [],
  bicep: [
    {
      id: 5,
      title: "Dumbell Bicep Curl",
      image: dumbellBicepCurlImg,
    },
  ],
  tricep: [],
  legs: [
    {
      id: 2,
      title: "Squat",
      image: bodyWeightSquatImg,
    },
  ],
};
