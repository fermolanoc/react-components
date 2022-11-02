import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import { TaskForm } from "../pure/forms/taskForm";

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

  // Functions to handle Tasks
  function completeTask(task) {
    console.log(`Complete this task: ${task.completed}`);
    // Get id of task to be updated
    const taskIdx = tasks.indexOf(task);
    console.log(taskIdx);

    // copy the original array of lists
    const tempTasks = [...tasks];
    tempTasks[taskIdx].completed = !tempTasks[taskIdx].completed;

    // Update the state of the component with the new tasks list to re render it
    setTasks(tempTasks);
  }

  function removeTask(task) {
    console.log(`Delete this task: ${task.completed}`);
    // Get id of task to be deleted
    const taskIdx = tasks.indexOf(task);
    console.log(taskIdx);

    const tempTasks = [...tasks];
    // Delete task
    tempTasks.splice(taskIdx, 1);

    // Update the state of component
    setTasks(tempTasks);
  }

  function addTask(task) {
    setTasks((prevTasks) => [task, ...prevTasks]);
  }

  const Table = () => {
    return (
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
          {tasks
            .sort(function (a, b) {
              return a.completed - b.completed;
            })
            .map((task, index) => {
              return (
                <TaskComponent
                  task={task}
                  key={index}
                  complete={completeTask}
                  remove={removeTask}
                />
              );
            })}
        </tbody>
      </table>
    );
  };

  const taskTable = <Table />;

  // Component's LifeCycle control
  useEffect(() => {
    console.log("Tasks state has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      console.log("Task list component will unmount");
    };
  }, [tasks]);

  const updateState = (id) => {
    console.log("TODO: update a task state");
  };
  return (
    <div>
      <h5 className="px-2 mt-4">Add a new Task</h5>
      <TaskForm add={addTask} length={tasks.length} />
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div
            className="card-header p-3 text-center bg-dark"
            style={{ color: "tomato" }}>
            <h5>
              {tasks.length !== 0
                ? `Your Tasks: (${tasks.length})`
                : "There are no Tasks"}
            </h5>
          </div>
          {/* Card Body (content) */}
          <div
            className="card-body table-responsive p-0"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}>
            {/* If no tasks, don't render table */}
            {loading ? (
              <p className="text-center my-4 fs-4">⏳ Loading Tasks</p>
            ) : (
              tasks.length > 0 && taskTable
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskListComponent;
