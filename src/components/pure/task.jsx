import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";

const TaskComponent = ({ task }) => {
  useEffect(() => {
    console.log("Task created");

    return () => {
      console.log(`Task: ${task.name} will unmount`);
    };
  }, [task]);

  return (
    <div className="task-container">
      <p className="task-name">Task: {task.name}</p>
      <p className="task-details">Details: {task.description}</p>
      <p className="task-level task-details">Level: {task.level}</p>
      <p
        className="task-status task-details"
        style={task.completed ? { color: "#282c34" } : { color: "coral" }}>
        This task is {task.completed ? "completed" : "pending"}
      </p>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
