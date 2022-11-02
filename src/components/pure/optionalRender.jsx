import React, { useState } from "react";

const OptionalRender = () => {
  const [access, setAccess] = useState(true);
  const [numberOfMessages, setNumberOfMessages] = useState(0);

  const updateAccess = () => {
    setAccess(!access);
  };

  let addMessages = () => {
    setNumberOfMessages((prevVal) => prevVal + 1);
  };

  let btn = (
    <button
      onClick={updateAccess}
      className="btn btn-sm mx-1 my-2"
      style={{
        backgroundColor: "tomato",
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
      }}>
      {access ? "Log out" : "Log in"}
    </button>
  );
  return (
    <div className="d-flex justify-content-between align-items-center container-fluid">
      <div>{btn}</div>

      {/* N messages unread */}
      <div className="d-flex flex-column px-2 my-2 justify-content-center">
        {numberOfMessages > 0 && (
          <p>
            You have{" "}
            <span style={{ color: "tomato", fontWeight: "bold" }}>
              {numberOfMessages}
            </span>{" "}
            unread message
            {numberOfMessages === 1 ? "" : "s"}.
          </p>
        )}
        {numberOfMessages === 0 && <p>You have no new messages.</p>}
        <button
          onClick={addMessages}
          className="btn btn-sm my-2"
          style={{
            backgroundColor: "tomato",
            fontWeight: "bold",
            color: "white",
            textTransform: "uppercase",
          }}>
          {numberOfMessages === 0
            ? "Add your first message"
            : "Add a new message"}
        </button>
      </div>
    </div>
  );
};

export default OptionalRender;
