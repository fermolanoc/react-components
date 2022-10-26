import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask = new Task(
    "Take OpenBootcamp React JS course",
    "From 0 to hero on React JS",
    false,
    LEVELS.NORMAL
  );

  // Component's state
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  // Component's LifeCycle control
  useEffect(() => {
    console.log("Tasks state has been modified");
    setLoading(false);

    return () => {
      console.log("Task list component will unmount");
    };
  }, [tasks]);

  const updateState = (id) => {
    console.log("TODO: update a task state");
  };
  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: Apply a map to render a task list */}
      <TaskComponent task={tasks} />;
    </div>
  );
};

export default TaskListComponent;
