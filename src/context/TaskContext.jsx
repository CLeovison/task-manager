// 1. Change file name to TaskContextProvider
import { createContext, useReducer } from "react";
import { taskReducer } from "../hooks/TaskReducer";

// 2. Change name from TaskContex to TaskContext (best naming convention for the context)
export const TaskContext = createContext();

// 3. Change name from TaskContext to TaskContextProvider (since this is a provider, and not the context itself)
export const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
      <TaskContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TaskContext.Provider>
  );
};

