/**
 * Login form to Authenticate users
 */

import React, { useState } from "react";

export const LoginForm = () => {
  const userCredentials = [
    {
      user: "",
      password: "",
    },
  ];

  const [credentials, setCredentials] = useState(userCredentials);
  return <div>loginForm</div>;
};
