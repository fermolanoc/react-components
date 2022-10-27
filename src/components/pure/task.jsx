import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import "../../styles/task.scss";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Task created");

    return () => {
      console.log(`Task: ${task.name} will unmount`);
    };
  }, [task]);

  /**
   * Function to return a badge depending on the task level
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6>
            {/* <span className="badge bg-secondary">{task.level}</span> */}
            <span>
              <i className="bi-droplet" style={{ color: "white" }}></i>
            </span>
          </h6>
        );
      case LEVELS.URGENT:
        return (
          <h6>
            {/* <span className="badge bg-warning">{task.level}</span> */}
            <span>
              <i className="bi-droplet-half" style={{ color: "coral" }}></i>
            </span>
          </h6>
        );
      case LEVELS.BLOCKING:
        return (
          <h6>
            {/* <span className="badge bg-danger">{task.level}</span> */}
            <span>
              <i className="bi-droplet-fill" style={{ color: "red" }}></i>
            </span>
          </h6>
        );

      default:
        break;
    }
  }

  return (
    <tr className="fw-normal">
      <td className="px-4">
        <span>{task.name}</span>
      </td>
      <td>
        <span>{task.description}</span>
      </td>
      <td className="text-center">
        {/* <span className="align-middle">{task.level}</span> */}
        {taskLevelBadge()}
      </td>
      <td className="text-center">
        {task.completed ? (
          <i className="bi-check2-all" style={{ color: "cyan" }}></i>
        ) : (
          <i className="bi-hourglass-split" style={{ color: "lightGrey" }}></i>
        )}
        {/* {task.completed ? "Completed" : "Pending"} */}
      </td>
      <td className="text-center">
        <i
          className="px-2 bi-trash task-action"
          style={{ color: "crimson" }}
          onClick={() => remove(task)}></i>
        <i
          className="px-2 bi-file-check task-action"
          style={task.completed ? { color: "lightGrey" } : { color: "cyan" }}
          onClick={() => complete(task)}></i>
      </td>
    </tr>
    // <div className="task-container">
    //   <p className="task-name">Task: {task.name}</p>
    //   <p className="task-details">Details: {task.description}</p>
    //   <p className="task-level task-details">Level: {task.level}</p>
    //   <p
    //     className="task-status task-details"
    //     style={task.completed ? { color: "#282c34" } : { color: "coral" }}>
    //     This task is {task.completed ? "completed" : "pending"}
    //   </p>
    // </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TaskComponent;
