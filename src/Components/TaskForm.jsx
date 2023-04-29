import React, { useState } from "react";
import { useTasks } from "./DataProvider";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const { addTasks } = useTasks();
  // const {addTasks} = useContext(TaskContext);

  const submit = (e) => {
    e.preventDefault();
    addTasks(task);
    setTask("");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Task Here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default TaskForm;