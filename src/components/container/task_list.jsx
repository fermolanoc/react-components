import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    "Give Austin pill",
    "From 0 to hero on React JS",
    false,
    LEVELS.NORMAL
  );
  const defaultTask2 = new Task(
    "Finish Python course",
    "Take 2 more quizzes",
    true,
    LEVELS.URGENT
  );
  const defaultTask3 = new Task(
    "Take OpenBootcamp React JS course",
    "From 0 to hero on React JS",
    false,
    LEVELS.BLOCKING
  );

  // Component's state
  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);
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
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header p-3 text-center bg-dark text-warning">
            <h5>Your Tasks:</h5>
          </div>
          {/* Card Body (content) */}
          <div
            className="card-body table-responsive p-0"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}>
            <table className="table table-striped table-dark table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="px-4">
                    Task
                  </th>
                  <th scope="col">Description</th>
                  <th scope="col" className="text-center">
                    Priority
                  </th>
                  <th scope="col" className="text-center">
                    Status
                  </th>
                  <th scope="col" className="text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Apply a map to render a task list */}
                {tasks.map((task, index) => {
                  return <TaskComponent task={task} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
