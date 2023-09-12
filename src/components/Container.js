import React from "react";
import { workoutCycle } from "../data/data";
export const Container = () => {
  console.log("workoutcycle", workoutCycle);
  return (
    <>
      <div>Container</div>
      <ul>
        {workoutCycle.map((muscleGroup) => (
          <li>
            <h2>{muscleGroup.muscle}</h2>
            <ul>
              {muscleGroup.workOut.map((workOut) => (
                <li>
                  <h3>{workOut.workout}</h3>
                  <table>
                    <tr>
                      <th>No</th>
                      <th>Reps</th>
                      <th>weight</th>
                    </tr>
                    {workOut.set.map((set) => (
                      <tr>
                        <td>{set.setNo}</td>
                        <td>{set.reps}</td>
                        <td>{set.weight}</td>
                      </tr>
                    ))}
                  </table>
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
