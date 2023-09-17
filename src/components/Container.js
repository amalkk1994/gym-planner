import React from "react";
import { workOutCycleTemp } from "../data/data-refined";
export const Container = () => {
  console.log("workoutcycle", workOutCycleTemp);
  return (
    <>
      <div>Container</div>
      <ul>
        {workOutCycleTemp.data.workOutPlan.map((workOutPlan) => (
          <li>
            <ul>
              {workOutPlan.workOut.map((workOut) => (
                <li>
                  <h3>{workOut.muscle}</h3>
                  <ul>
                    {workOut.exercise.map((expercise) => (
                      <li>
                        <p>{expercise.name}</p>
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
