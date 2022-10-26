import React, { useEffect } from "react";

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log(
      "Behaviour when component receives new props or change on its private state"
    );
  });

  return <div>DidUpdateHook</div>;
};
