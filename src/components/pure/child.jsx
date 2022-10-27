import React, { useRef } from "react";

export const Child = ({ name, sendMsg, update }) => {
  const messageRef = useRef("");
  const nameRef = useRef("");

  function pressButton() {
    const text = messageRef.current.value;
    alert(`Text from input: ${text}`);
  }

  function pressButttonParams(text) {
    alert(`Text: ${text}`);
  }

  function submitForm(e) {
    e.preventDefault();
    update(nameRef.current.value);
  }

  return (
    <div className="bg-warning m-3 p-3 text-dark">
      <p>Child Component</p>
      <p className="mb-2">
        Name on Child Component (value from parent): {name}
      </p>
      <button onClick={pressButton}>Button 1</button>
      <button onClick={() => pressButttonParams("Hey")}>Button 2</button>
      <input
        ref={messageRef}
        type="text"
        defaultValue={"Default text"}
        placeholder="Write anything..."
        onChange={(e) => console.log(`Input changed: ${e.target.value}`)}
      />
      <button onClick={() => sendMsg(messageRef.current.value)}>
        Send message to father
      </button>

      <div className="mt-3">
        <form action="" onSubmit={submitForm}>
          <input type="text" placeholder="New Name" ref={nameRef} />
          <button type="submit">Update name</button>
        </form>
      </div>
    </div>
  );
};
