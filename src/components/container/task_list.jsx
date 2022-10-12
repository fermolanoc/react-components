import React from "react";
import PropTypes from "prop-types";
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

  return (
    <div>
      <div>
        <h1>Your Tasks:</h1>
      </div>
      {/* TODO: Apply a map to render a task list */}
      <TaskComponent task={defaultTask} />
    </div>
  );
};

TaskListComponent.propTypes = {};

export default TaskListComponent;