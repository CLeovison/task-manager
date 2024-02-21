// Rename MainContext.jsx to AddTaskForm.jsx and move into its own components folder
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import styles from "../components/random.module.css";
export const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const { tasks, dispatch } = useTasks();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("All");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: title });
    setTitle("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const handleSelected = (id) => {
    dispatch({ type: "TOGGLE_TASK_STATUS", payload: id });
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };
  const handleSave = (num) => {
    dispatch({ type: "EDIT_TASK", payload: { id: num, title: editText } });
    setEditId(null);
  };
  
  const handleFilter = (x) => {
    switch (filter) {
      case "All":
        return true;
      case "Pending":
        return !x;
      case "Completed":
        return x;
    }
  };
  const handleSelect = (e) =>{
    setFilter(e.target.value)
    setEditId(null)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <div className="main-element">
        <select name="" id="" onChange={handleSelect}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <ul>
          {tasks
            ?.filter((task) => handleFilter(task.completed))
            .map((title) => (
              <li key={title.id}>
                <input
                  type="checkbox"
                  id={title.id}
                  onChange={(e) => handleSelected(title.id)}
                  checked={title.completed}
                />

                {editId !== title.id && (
                  <label
                    htmlFor={title.id}
                    className={title.completed ? styles.completed : ""}
                  >
                    {title.title}
                  </label>
                )}
                {editId === title.id && (
                  <>
                    <input
                      type="text"
                      onChange={(e) => setEditText(e.target.value)}
                      defaultValue={title.title}
                    />
                    <button onClick={(e) => handleSave(title.id)}> Save</button>
                  </>
                )}

                {editId !== title.id && (
                  <button onClick={(e) => handleEdit(title.id, title.title)}>
                    Edit{" "}
                  </button>
                )}

                <button onClick={(e) => handleDelete(title.id)}>Delete</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
