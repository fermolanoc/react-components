import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingFunctional = (props) => {
  const [age, setAge] = useState(29);
  const birthday = () => {
    setAge((prevVal) => prevVal + 1);
  };
  return (
    <div>
      <h1>Howdy 👋 {props.name} from a Functional component</h1>
      <h2>Your age is: {age}</h2>
      <div>
        <button onClick={birthday}>It's my birthday!</button>
      </div>
    </div>
  );
};

GreetingFunctional.propTypes = {
  name: PropTypes.string,
};

export default GreetingFunctional;
