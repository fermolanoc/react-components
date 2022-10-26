/**
 * Ex: lifecycle hook on a functional component
 */

import React, { useEffect } from "react";

export const DidMountHook = () => {
  useEffect(() => {
    console.log("Behaviour before the component is render on DOM");
  }, []);

  return <div>DidMountHook</div>;
};
