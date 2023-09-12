export const workOut1 = {
  workout: "Dumbell curls",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const workOut2 = {
  workout: "Hammer curls",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const workOut3 = {
  workout: "Bar curls",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const workOut8 = {
  workout: "Lat pull down",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const workOut5 = {
  workout: "Reverse grip Lap pulldown",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const workOut6 = {
  workout: "T Bar",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const workOut7 = {
  workout: "Seated Row",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const workOut4 = {
  workout: "Preacher curl",
  set: [
    { setNo: 1, reps: 10, weight: "10kg" },
    { setNo: 2, reps: 10, weight: "12.5kg" },
    { setNo: 3, reps: 10, weight: "15kg" },
    { setNo: 4, reps: 10, weight: "17.5kg" },
  ],
};

export const muscleGroup1 = {
  muscle: "biceps",
  workOut: [{ ...workOut1 }, { ...workOut2 }, { ...workOut3 }, { ...workOut4 }],
};

export const muscleGroup2 = {
  muscle: "back",
  workOut: [{ ...workOut5 }, { ...workOut6 }, { ...workOut7 }, { ...workOut8 }],
};

export const workOutPlan1 = [{ ...muscleGroup1 }, { ...muscleGroup2 }];

export const workoutCycle = workOutPlan1;
