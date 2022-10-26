import React, { useState } from "react";

// Defining styles in a constant
const loggedStyle = {
  marginBottom: "8rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "coral",
};
const unloggedStyle = {
  marginBottom: "8rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#282c34",
};
const logginBtn = {
  background: "transparent",
  border: "1px solid coral",
  color: "#282c34",
  borderRadius: "4px",
  fontSize: ".9rem",
  padding: "auto 1rem",
  width: "100px",
};

export const GreetingStyled = (props) => {
  const greetingMsg = () => <span>Welcome {props.name}</span>;
  const loginMsg = () => <span>Please log in</span>;

  const [logged, setLogged] = useState(false);
  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingMsg() : loginMsg()}
      <button
        style={logginBtn}
        onClick={() => {
          setLogged(!logged);
        }}>
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};
