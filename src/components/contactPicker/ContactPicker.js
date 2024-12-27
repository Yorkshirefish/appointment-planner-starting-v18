import React from "react";

export const ContactPicker = ({name, contacts, value, handleContactChange}) => {

  return (
    <select form="appointment-form" value={value} onChange={handleContactChange} name={name}>
      <option value=''>No contact selected</option>
      {contacts.map((c, index) => (
        <option value={c.name} key={index}>{c.name}</option>
      ))}
    </select>
  );
};
