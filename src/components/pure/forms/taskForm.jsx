import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

export const TaskForm = ({ add }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();

    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );

    // clear inputs
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    levelRef.current.value = LEVELS.NORMAL;

    // Add new task
    add(newTask);
  }

  return (
    <form
      onSubmit={addTask}
      className="d-flex-col justify-content-center align-items-center mb-4 px-4">
      <div className="form-group my-3">
        <label htmlFor="inputName" className="sr-only">
          Task name:
        </label>
        <input
          ref={nameRef}
          type="text"
          id="inputName"
          className="form-control form-control-md"
          required
          autoFocus
        />
      </div>
      <div className="form-group my-3">
        <label htmlFor="inputDescription" className="sr-only">
          Task description:
        </label>
        <input
          ref={descriptionRef}
          type="text"
          id="inputDescription"
          className="form-control form-control-md"
          required
        />
      </div>

      <div className="form-group my-3">
        <label htmlFor="inputLevel" className="sr-only">
          Priority:
        </label>
        <select
          ref={levelRef}
          name="level"
          id="inputLevel"
          className="form-control form-control-md"
          defaultValue={LEVELS.NORMAL}>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <div className="form-group my-3 text-end">
        <button
          type="submit"
          className="btn btn-md col-4 col-lg-2"
          style={{
            backgroundColor: "tomato",
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
          }}>
          Add
        </button>
      </div>
    </form>
  );
};

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};
