import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Task created");

    return () => {
      console.log(`Task: ${task.name} will unmount`);
    };
  }, [task]);

  return (
    <div>
      <p>Task: {task.name}</p>
      <p>Details: {task.description}</p>
      <p>Level: {task.level}</p>
      <p>This is task is {task.completed ? "completed" : "pending"}</p>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
