import React from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

const App = () => {


  return (
    <>
      <div className="container">
        <h1 className="title">Task List</h1>
        <TaskForm />
        <TaskList/>
      </div>
    </>
  );
};

export default App;