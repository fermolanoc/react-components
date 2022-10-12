import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const UserConnection = ({ contact }) => {
  return (
    <div>
      {contact.isLoggedIn ? "Contacto en Línea" : "Contacto No Disponible"}
    </div>
  );
};

UserConnection.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default UserConnection;
