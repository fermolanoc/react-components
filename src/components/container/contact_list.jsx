import React, { useState, useEffect } from "react";
import { Contact } from "../pure/contact";
import { ContactForm } from "../pure/forms/contactForm";

export const ContactList = () => {
  const contacts = [
    {
      name: "Fernando",
      lastName: "Molano",
      email: "f.molano@mail.com",
      isConnected: false,
    },
    {
      name: "Silvye",
      lastName: "Cup",
      email: "s.cup@mail.com",
      isConnected: false,
    },
    {
      name: "Rafael",
      lastName: "Molano",
      email: "r.molano@mail.com",
      isConnected: true,
    },
  ];

  const [contactList, setContactList] = useState(contacts);

  // Functions to handle contacts
  function addContact(contact) {
    setContactList((prevValue) => [...prevValue, contact]);
  }

  function removeContact(contact) {
    const contactIdx = contactList.indexOf(contact);

    const tempContactList = [...contactList];
    tempContactList.splice(contactIdx, 1);

    setContactList(tempContactList);
  }

  function updateContactStatus(contact) {
    const contactIdx = contactList.indexOf(contact);
    const tempContactList = [...contactList];

    tempContactList[contactIdx].isConnected =
      !tempContactList[contactIdx].isConnected;

    setContactList(tempContactList);
  }

  useEffect(() => {
    console.log("Loading list of contacts");
  }, [contactList]);

  return (
    <div className="mt-5 px-4">
      <ContactForm add={addContact} />
      <table className="table table-dark table-striped">
        <thead className="thead-dark">
          <tr>
            <th className="px-3" scope="col">
              Name
            </th>
            <th className="px-3" scope="col">
              Lastname
            </th>
            <th className="px-3" scope="col">
              Email
            </th>
            <th className="px-3" scope="col">
              Status
            </th>
            <th className="px-3" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact, index) => {
            return (
              <Contact
                contact={contact}
                key={index}
                remove={removeContact}
                updateStatus={updateContactStatus}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
