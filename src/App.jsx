import React from "react";
import TaskContext, { useTask } from "./pages/TaskContext";

export default function App() {
  return (
    <>
      {/*Step 1: So inorder to call the all the logic from the taskContext.jsx File 
        i need to export it from the pages folder */}
      <TaskContext>
        {/*Step 2: Inorder to execute all the logic from the Task Context I need to create a new function
        that i can put all the html and also the logic from the TaskContext*/}
        <MainContext/>
      </TaskContext>
    </>
  );
}

function MainContext(){
  const {Add, Delete, Toggle} = useTask();

  return(
    <>
    <form action="">
      <input type="text" />
    </form>
    </>
  )
}