import { TaskContextProvider } from './context/TaskContext'; // Adjust the import to point to TaskContextProvider
import { AddTaskForm } from "./components/AddTaskForm";

export default function App() {
  return (
    <TaskContextProvider>
      <AddTaskForm />
    </TaskContextProvider>
  );
}
