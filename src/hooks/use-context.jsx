/**
 * Examples of:
 * useState()
 * useContext()
 */

import React, { useState, useContext } from "react";

/**
 * First component has a context that will have a value received from parent
 */
const myContext = React.createContext(null);
const UseContextExample1 = () => {
  // initialized empty, and will be loaded from parent
  const state = useContext(myContext);
  return (
    <div>
      <h4>Token is: {state.token}</h4>
      {/* Load Second component */}
      <UseContextExample2 />
    </div>
  );
};
const UseContextExample2 = () => {
  const state = useContext(myContext);
  return (
    <div>
      <h4>Session id: {state.session}</h4>
    </div>
  );
};

export default function ComponentWithContext() {
  const initialState = {
    token: "1234567",
    session: 1,
  };

  // Create component's state
  const [sessionData, setSessionData] = useState(initialState);

  // Function to update session
  function updateSession() {
    setSessionData({
      token: "JWT82789394",
      session: sessionData.session + 1,
    });
  }
  return (
    <myContext.Provider value={sessionData}>
      <h1>Example of useState() and useContext()</h1>
      {/* Everything that is inside this component can read all session data */}
      {/* If something is updated here, it'll be updated as well there */}
      <UseContextExample1 />
      <button onClick={updateSession}>Update session</button>
    </myContext.Provider>
  );
}
