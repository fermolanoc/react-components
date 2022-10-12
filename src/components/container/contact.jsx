import React from "react";
import UserConnection from "../pure/user_connection";

const Contact = () => {
  const defaultContact = {
    name: "Fernando",
    lastName: "Molano",
    email: "f.molano@mail.com",
    isLoggedIn: true,
  };

  return (
    <div>
      <UserConnection contact={defaultContact} />
    </div>
  );
};

export default Contact;
