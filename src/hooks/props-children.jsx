/**
 * Example of props.children use
 */

import React from "react";

export const PropsChildren = (props) => {
  return (
    <div>
      <h1>Example of Children Props</h1>
      <h4>Name: {props.name}</h4>
      {/* Props.children will draw by default whatever is found between the opening and closing tags of this component from the HOC component */}
      {props.children}
    </div>
  );
};
