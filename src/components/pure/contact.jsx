import React from "react";

export const Contact = ({ contact, remove, updateStatus }) => {
  return (
    <tr>
      <td className="text-left col">Name: {contact.name}</td>
      <td className="text-left col">Lastname: {contact.lastName}</td>
      <td className="text-left col">Email: {contact.email}</td>
      <td className="text-left col">
        Status: {contact.isConnected ? "Conectado" : "Desconectado"}
      </td>
      <td className="actions col">
        <i
          className="bi-trash px-2"
          style={{ color: "crimson" }}
          onClick={() => remove(contact)}></i>
        <i
          className={
            contact.isConnected ? "bi-toggle-off px-2" : "bi-toggle-on px-2"
          }
          style={contact.isConnected ? { color: "lime" } : { color: "white" }}
          onClick={() => updateStatus(contact)}></i>
      </td>
    </tr>
  );
};
