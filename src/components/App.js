import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Swtich, Route } from 'react-router-dom';
// import { uuid } from 'uuidv4'
import { v4 as uuid } from "uuid";

import Header from './Header'
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState( JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Mahin",
  //     contact:"01623831121"
  //   },
  // ];
  const addContactHandler = (contact) => {
    console.log(contact);
    //setContacts([...contacts,contact]);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={ContactList} />
          <Route
            path="/add"
            component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          />
        </Routes>
      </Router>
      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
