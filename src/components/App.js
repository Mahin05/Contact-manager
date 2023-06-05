import './App.css';
import React, { useState} from 'react';
import Header from './Header'
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const [contacts, setContacts] = useState([]);
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Mahin",
  //     contact:"01623831121"
  //   },
  // ];
  const addContactHandler = (contact) => {
    console.log(contact);
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
