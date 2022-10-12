import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
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
