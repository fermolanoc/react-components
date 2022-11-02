import React, { useState, useEffect } from "react";

const ConditionalRendering = () => {
  const [boxBg, setBoxBg] = useState([0, 0, 0]);
  const [isMouseIn, setIsMouseIn] = useState(false);

  let interval = 0;

  function updateBackground() {
    console.log("Mouse entered");
    //   Generate 3 random values for RGB colors
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    console.log(randomRed, randomGreen, randomBlue);

    //   Update box background
    setBoxBg([randomRed, randomGreen, randomBlue]);
  }

  function handleDoubleClick(event) {
    //   if user double clicks, update value of isMouseIn to stop useEffect rendering then stops the interval
    if (event.detail === 2) {
      setIsMouseIn(false);
      clearInterval(interval);
    }
  }

  useEffect(() => {
    console.log("Conditional rendering status changed...");
    if (isMouseIn) {
      interval = setInterval(updateBackground, 1000);
    }
    return () => clearInterval(interval);
  }, [isMouseIn]);

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center h-auto m-4">
      <h3>Conditional Rendering</h3>
      <div
        onMouseEnter={() => setIsMouseIn(true)}
        onMouseLeave={() => setIsMouseIn(false)}
        onClick={handleDoubleClick}
        // onMouseOut={setBoxBg(boxBg)}
        style={{
          width: "255px",
          height: "255px",
          backgroundColor: `rgb(${boxBg})`,
        }}></div>
    </div>
  );
};

export default ConditionalRendering;
