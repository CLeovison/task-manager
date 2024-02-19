// Rename MainContext.jsx to AddTaskForm.jsx and move into its own components folder
import { useState } from 'react';
import {useTasks} from '../hooks/useTasks'

export const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const { dispatch } = useTasks();

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: 'ADD_TASK', payload: title });
      setTitle('');
  };

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <button type="submit">Add Task</button>
      </form>
  );
};
