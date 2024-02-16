import React, { createContext, useContext, useReducer, useState } from "react";
import { taskReducer } from "../hooks/TaskReducer";

//Step 1: Creating A Context
const TaskContex = createContext();
//End of Step 1

//Step 2: Providing A Context. Meaning that in order to use the ...
//... Global Data You need to create a context that you can put all your data
export default function TaskContext({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <>
      {/* So the main reason why task and dispatch was the value that has been put in the TaskContext 
     is because when the child component execute something the logic from the tasks and dispatch will be used
    
    */}
      <TaskContex.Provider value={{ tasks, dispatch }}>
        {children}
      </TaskContex.Provider>
    </>
  );
}
//End of Step 2

//Step 3: Consuming the Context. Meaning that in this final step i need to put the TaskContex
//because all the data that has been need was put in the Step 2
export const useTask = () => useContext(TaskContex);
//End of Step 3
