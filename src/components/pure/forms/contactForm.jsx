import React, { useRef } from "react";
import { Contact } from "../../../models/contact.class";

export const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");

  function addContact(e) {
    e.preventDefault();

    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false
    );

    // Clear inputs
    nameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";

    add(newContact);
  }
  return (
    <div className="w-auto">
      <div className="mb-2 text-danger">
        Add contact <i className="bi-person-plus-fill"></i>
      </div>
      <div>
        <form onSubmit={addContact} className="my-2 d-flex align-items-center">
          <input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            placeholder="First name"
          />
          <input
            ref={lastNameRef}
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name"
          />
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <button type="submit" className="btn btn-outline-danger btn-sm mx-2">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
