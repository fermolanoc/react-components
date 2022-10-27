import React, { useState } from "react";
import { Child } from "../pure/child";

export const Father = () => {
  const [name, setName] = useState("Fernando");
  function showMessage(text) {
    alert(`Message received: ${text}`);
  }

  function updateName(newName) {
    setName(newName);
  }

  return (
    <div className="bg-dark text-white p-3">
      <p>Parent Component</p>
      <p>Name on Parent Component: {name}</p>
      <Child name={name} sendMsg={showMessage} update={updateName} />
    </div>
  );
};
