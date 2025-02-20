import React, {useState} from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  function handleAddContact(name, phone, email) {
    const newContact = {
      name: name,
      phone: phone,
      email: email
    }

    setContacts((c) => [...c, newContact]);

  }

  function handleAddAppointment(name, contact, date, time) {

    const newAppointment = {
      name: name,
      contact : contact,
      date: date, 
      time: time
    }

    setAppointments((a) => [...a, newAppointment]);

  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage handleAddContact={handleAddContact} contacts={contacts}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage handleAddAppointment={handleAddAppointment} appointments={appointments} contacts={contacts}/> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
