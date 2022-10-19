/**
 * useState() Hook example
 *
 * Create a function type component, and access to its state througt
 * a hook and modifiy it
 */

import React, { useState } from "react";

const UseStateExample = () => {
  // Initial value for a counter
  const initialValue = 0;
  const incrementalValue = 2;

  // Initial value for a person
  const initialPerson = {
    name: "Silvye",
    email: "silvye@gmail.com",
  };

  /**
   * We want initialValue and initialPerson to be part of the component's state so we can work with its changes and see those changed reflected on component's view
   *
   * const [variableName, functionToChangeIt] = useState(initialValue)
   */

  const [counter, setCounter] = useState(initialValue);
  const [person, setPerson] = useState(initialPerson);

  /**
   * Update counter
   */
  function updateCounter(val) {
    setCounter((prevVal) => (prevVal += val));
  }

  /**
   * Function to update a Person
   * @param {*} person
   */
  function updatePerson(person) {
    setPerson({
      name: person.name,
      email: person.email,
    });
  }
  return (
    <div>
      <h1>useState Example</h1>
      <button onClick={() => updateCounter(-incrementalValue)}> - </button>
      {counter}
      <button onClick={() => updateCounter(incrementalValue)}> + </button>
      <h2>Person Details:</h2>
      <p>Name: {person.name}</p>
      <p>email: {person.email}</p>
      <button
        onClick={() => updatePerson({ name: "Meli", email: "meli@gmail.com" })}>
        Update person
      </button>
    </div>
  );
};

export default UseStateExample;
