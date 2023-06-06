import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "mahin",
  //     contact:"01"
  //   }
  // ]
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={ contact} clickHandler={deleteConactHandler} key={contact.id} />
    })
  return (
    <div className="main">
      <h2>Contact List</h2>
      <Link to='/add'>
        <button className="ui celled list">Add New</button>
      </Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}

export default ContactList
