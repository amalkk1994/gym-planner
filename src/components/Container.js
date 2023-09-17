import React from "react";
import { workOutCycleTemp } from "../data/data-refined";
import ListItemText from "@mui/material/ListItemText";
export const Container = () => {
  console.log("workoutcycle", workOutCycleTemp);
  return (
    <>
      <div>Container</div>
      <ul>
        {workOutCycleTemp.data.workOutPlan.map((workOutPlan) => (
          <li>
            <h2>{workOutPlan.day}</h2>
            <ul>
              {workOutPlan.workOut.map((workOut) => (
                <li>
                  <h3>{workOut.muscle}</h3>
                  <ul>
                    {workOut.exercise.map((expercise) => (
                      <li>
                        <ListItemText primary={expercise.name} />
                        <p>{JSON.stringify(expercise.set)}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

//          <li key={muscleGroup.muscle}>{muscleGroup.muscle}</li>
