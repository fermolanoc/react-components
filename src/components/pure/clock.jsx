// Challenge: Convert given class component with lifecycle to a functional component that does the exactly the same

import React, { useState, useEffect } from "react";

export const Clock = () => {
  // Initial private State of the component
  const [initialDate, setInitialDate] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  });

  useEffect(() => {
    // componentDidMount version with functional component
    const timerID = setInterval(() => {
      thick();
    }, 1000);
    return () => {
      // componentWillUnmount version with functional component
      clearInterval(timerID);
    };
  }, []);

  function thick() {
    setInitialDate((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }

  return (
    <div>
      <h2>Hora Actual: {initialDate.fecha.toLocaleTimeString()}</h2>
      <h3>
        {initialDate.nombre} {initialDate.apellidos}
      </h3>
      <h1>Edad: {initialDate.edad}</h1>
    </div>
  );
};
