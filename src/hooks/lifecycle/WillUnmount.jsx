import React, { useEffect } from "react";

export const WillUnmountHook = () => {
  useEffect(() => {
    // We don't add anything here
    return () => {
      // We need to RETURN something
      console.log("Behaviour before component dissapears.");
    };
  }, []);

  return <div>WillUnmountHook</div>;
};
