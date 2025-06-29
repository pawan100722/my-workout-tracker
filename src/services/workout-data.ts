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

import dumbellBicepCurlImg from "../images/workout/bicep/dumbell-bicep-curl.webp";
import dumbellConcentrationCurlImg from "../images/workout/bicep/concentration-curls.jpg";
import dumbellReverseCurlImg from "../images/workout/bicep/dumbbell-reverse-curl.webp";
import dumbellHammerCurlImg from "../images/workout/bicep/dumbell-hammer-curl.webp";
import dumbellPeacherCurlImg from "../images/workout/bicep/dumbbell-preacher-curl.jpg";

import dumbellStandingKickBacksImg from '../images/workout/tricep/dumbbell-standing-kickback.webp'
import dumbellOverHeadTricepExtensionImg from '../images/workout/tricep/dumbell-overhead-tricep-extension.png'
import dumbellSingleArmKickBacksImg from '../images/workout/tricep/dumbell-single-arm-kick-backs.jpeg'
import dumbellSingleArmOverHeadExtensionImg from '../images/workout/tricep/dumbell-single-arm-overhead-tricep-extension.jpeg'
import tricepDipsImg from '../images/workout/tricep/tricep-dips.webp'

import bodyWeightSquatImg from "../images/workout/legs/bodyweight-squat.png";
import bulgarianSplitImg from "../images/workout/legs/bulgarian-split-squats.jpeg";
import CalfRaiseImg from "../images/workout/legs/calf-raise.jpg";
import gluteBridgesImg from "../images/workout/legs/glute-bridges.jpeg";
import lungesImg from "../images/workout/legs/lunges.jpeg";
import sumoSquatImg from "../images/workout/legs/sumo-squats.jpg";

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
      id: 2,
      title: "Dumbell Over Head Press",
      image: dumbellOverHeadPressImg,
    },
    {
      id: 3,
      title: "Dumbell Lateral Raise",
      image: dumbellLateralRaiseImg,
    },
    {
      id: 4,
      title: "Dumbell Shrugs",
      image: dumbellShrugsImg,
    },
    {
      id: 5,
      title: "Dumbell Upright Row",
      image: dumbellUpRightRowImg,
    },
  ],
  bicep: [
    {
      id: 1,
      title: "Dumbell Bicep Curl",
      image: dumbellBicepCurlImg,
    },
    {
      id: 2,
      title: "Dumbell Concentration Curl",
      image: dumbellConcentrationCurlImg,
    },
    {
      id: 3,
      title: "Dumbell Reverse Curl",
      image: dumbellReverseCurlImg,
    },
    {
      id: 4,
      title: "Dumbell Hammer Curl",
      image: dumbellHammerCurlImg,
    },
    {
      id: 5,
      title: "Dumbell Peacher Curl",
      image: dumbellPeacherCurlImg,
    },
  ],
  tricep: [
    {
      id: 1,
      title: "Tricep Dips",
      image: tricepDipsImg,
    },
    {
      id: 2,
      title: "Dumbell Single Arm Overhead Extension",
      image: dumbellSingleArmOverHeadExtensionImg,
    },
    {
      id: 3,
      title: "Dumbell Single Arm Kickbacks",
      image: dumbellSingleArmKickBacksImg,
    },
    {
      id: 4,
      title: "Dumbell Overhead Tricep Extension",
      image: dumbellOverHeadTricepExtensionImg,
    },
    {
      id: 5,
      title: "Dumbell Standing Kickbacks",
      image: dumbellStandingKickBacksImg,
    },
  ],
  legs: [
    {
      id: 1,
      title: "Squat",
      image: bodyWeightSquatImg,
    },
    {
      id: 2,
      title: "Bulgarian Split",
      image: bulgarianSplitImg,
    },
    {
      id: 3,
      title: "Sumo Squat",
      image: sumoSquatImg,
    },
    {
      id: 4,
      title: "Lunges",
      image: lungesImg,
    },
    {
      id: 5,
      title: "Glute Bridges",
      image: gluteBridgesImg,
    },
    {
      id: 6,
      title: "Calf Raise",
      image: CalfRaiseImg,
    },
  ],
};
