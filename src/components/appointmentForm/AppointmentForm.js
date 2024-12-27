import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({name, contact, date, time, setName, setContact, setDate, setTime, handleSubmit, contacts}) => {

  function handleNameChange({target}) {
    setName(target.value);
  }

  function handleDateChange({target}) {
    setDate(target.value);
  }

  function handleTimeChange({target}) {
    setTime(target.value);
  }

  function handleContactChange({target}) {
    setContact(target.value);
  }

  return (
    <form id="appointment-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" value={name} onChange={handleNameChange}></input>
      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="date" value={date} onChange={handleDateChange} min={getTodayString()}></input>
      <label htmlFor="time">Time:</label>
      <input id="time" name="time" type="time" value={time} onChange={handleTimeChange}></input>
      <label htmlFor="contact-picker">Select Contact:</label>
      <ContactPicker id='contact-picker' name={name} contacts={contacts} value={contact} handleContactChange={handleContactChange}/>
      <input type="submit"></input>
    </form>
  );
};
