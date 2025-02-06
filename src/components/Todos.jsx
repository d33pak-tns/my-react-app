import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    setTodos(todos.filter((todo) => todo !== taskToRemove));
  };

  return (
    <div className="my-2 ">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
        className="p-2 border-md bg-slate-300 rounded-lg"
      />
      <button
        onClick={handleAddTask}
        className="mx-1 p-2 text-md text-white bg-blue-500 rounded-md"
      >
        Add
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="m-3 text-[1rem]">
            {todo}{" "}
            <button
              className="text-md text-red-500 mx-1"
              onClick={() => handleRemoveTask(todo)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoApp;
