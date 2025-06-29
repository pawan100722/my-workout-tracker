// import defaultWorkoutImg from '../images/default-workout.jpg';
import pushupImg from "../images/workout/pushup/push-up.jpg";
import inclinePushupImg from "../images/workout/pushup/incline-pushup.jpg";
import declinePushupImg from "../images/workout/pushup/decline-pushup.jpg";
import diamondPushupsImg from "../images/workout/pushup/diamond-pushup.webp";
import spidermanPushupsImg from "../images/workout/pushup/spiderman_push_ups.webp";

import dumbellFliesImg from "../images/workout/chest/dumbell-flies.webp";
import dumbellPulloverImg from "../images/workout/chest/dumbbell-pullover.webp";
import dumbellFlatPressImg from "../images/workout/chest/flat-dumbell-press.webp";
import dumbellInclinePressImg from "../images/workout/chest/incline-dumbbell-press.webp";
import dumbellDeclinePressImg from "../images/workout/chest/decline-dumbbell-press.webp";

import dumbellBentOverRowImg from "../images/workout/back/dumbbell-bent-over-row.webp";
import dumbellReverseGripRowImg from "../images/workout/back/dumbbellreverse-grip-row.jpg";
import dumbellSingleArmBentOverRowImg from "../images/workout/back/dumbbell-single-arm-bent-over-row.webp";
import dumbellReverseFlyImg from "../images/workout/back/dumbell-reverse-fly.jpg";
import dumbellRomanianDeadLifeImg from "../images/workout/back/dumbell-romanian-deadlift.webp";

import dumbellFrontRaiseImg from "../images/workout/shoulder/dumbbell-front-raise.png";
import dumbellShrugsImg from "../images/workout/shoulder/dumbbell-shrugs.webp";
import dumbellOverHeadPressImg from "../images/workout/shoulder/dumbbell-standing-overhead-press.webp";
import dumbellLateralRaiseImg from "../images/workout/shoulder/dumbell-lateral-raise.jpeg";
import dumbellUpRightRowImg from "../images/workout/shoulder/dumbell-upright-row.webp";

import bodyWeightSquatImg from "../images/workout/bodyweight-squat.png";
import dumbellBicepCurlImg from "../images/workout/dumbell-bicep-curl.webp";

export const WORKOUT_DATA = {
  pushup: [
    {
      id: 1,
      title: "Push Up",
      image: pushupImg,
    },
    {
      id: 2,
      title: "Incline Pushup",
      image: inclinePushupImg,
    },
    {
      id: 3,
      title: "Decline Pushup",
      image: declinePushupImg,
    },
    {
      id: 4,
      title: "Diamond Pushup",
      image: diamondPushupsImg,
    },
    {
      id: 5,
      title: "Spider-Man Pushup",
      image: spidermanPushupsImg,
    },
  ],
  chest: [
    {
      id: 1,
      title: "Dumbell Flat Chest Press",
      image: dumbellFlatPressImg,
    },
    {
      id: 2,
      title: "Dumbell Incline Chest Press",
      image: dumbellInclinePressImg,
    },
    {
      id: 3,
      title: "Dumbell Decline Chest Press",
      image: dumbellDeclinePressImg,
    },
    {
      id: 4,
      title: "Dumbell Pullover",
      image: dumbellPulloverImg,
    },
    {
      id: 5,
      title: "Dumbell Flies",
      image: dumbellFliesImg,
    },
  ],
  back: [
    {
      id: 1,
      title: "Dumbell Bent Over Row",
      image: dumbellBentOverRowImg,
    },
    {
      id: 2,
      title: "Dumbell Reverse Grip Row",
      image: dumbellReverseGripRowImg,
    },
    {
      id: 3,
      title: "Dumbell Single Arm Bent Over Row",
      image: dumbellSingleArmBentOverRowImg,
    },
    {
      id: 1,
      title: "Dumbell Reverse Fly",
      image: dumbellReverseFlyImg,
    },
    {
      id: 1,
      title: "Dumbell Romanian Dead-lift",
      image: dumbellRomanianDeadLifeImg,
    },
  ],
  shoulders: [
    {
      id: 1,
      title: "Dumbell Front Raise",
      image: dumbellFrontRaiseImg,
    },
    {
      id: 1,
      title: "Dumbell Over Head Press",
      image: dumbellOverHeadPressImg,
    },
    {
      id: 1,
      title: "Dumbell Lateral Raise",
      image: dumbellLateralRaiseImg,
    },
    {
      id: 1,
      title: "Dumbell Shrugs",
      image: dumbellShrugsImg,
    },
    {
      id: 1,
      title: "Dumbell Upright Row",
      image: dumbellUpRightRowImg,
    },
  ],
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
