import React, { useEffect } from "react";

export const AllCycles = () => {
  useEffect(() => {
    console.log("Component created");

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`;
      console.log("Updating component");
    }, 1000);

    return () => {
      console.log("Component will dissapear");
      document.title = "Time has stopped";
      clearInterval(intervalID);
    };
  }, []);

  return <div>AllCycles</div>;
};
