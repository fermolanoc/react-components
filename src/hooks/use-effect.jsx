/**
 * useEffect(), useState(), and useRef() example
 */

import React, { useState, useRef, useEffect } from "react";

const UseEffectExample = () => {
  // Create 2 counters. each one with a different state
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // Create a reference with useRef() to associate a variable with a DOM element (HTML view) -> instead of using jQuery with document.getElementById.... etc
  const myRef = useRef();

  function updateCounter1() {
    setCounter1((prevVal) => (prevVal += 1));
  }
  function updateCounter2() {
    setCounter2((prevVal) => (prevVal += 1));
  }

  /**
   * Working with useEffect()
   *
   * Case 1: Execute ALWAYS a code snippet
   * Every time there is a change inside the component, whatever it
   * is inside the useEffect will be executed
   */
  //   useEffect(() => {
  //     console.log("There was a change on the component state");
  //     console.log("Showing reference to the DOM element:");
  //     console.log(myRef);
  //   });

  /**
   * Case 2: Execute ONLY when counter1 chaages
   * Every time counter1 changes, execute what's inside useEffect
   */
  useEffect(() => {
    console.log("There was a change on the COUNTER1 state");
    console.log("Showing reference to the DOM element:");
    console.log(myRef);
  }, [counter1]);

  return (
    <div>
      <h1>useState, useRef & useEffect Examples</h1>
      <h2>Counter 1: {counter1}</h2>
      <h2>Counter 2: {counter2}</h2>
      {/* Referenced element */}
      <h5 ref={myRef}>Referenced Element</h5>
      {/* Buttons to change counters */}
      <div>
        <button onClick={updateCounter1}>Increment counter by 1</button>
        <button onClick={updateCounter2}>Increment counter by 2</button>
      </div>
    </div>
  );
};

export default UseEffectExample;
