import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate]= useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(!duplicate) {
    props.addContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(()=> {
    const dup = props.contacts.some((contact)=> contact.name === name);
    console.log(dup);
    setDuplicate(dup);
  }, [name, props.contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
         <ContactForm 
         name={name}
         setName={setName}
         phone={phone}
         setPhone={setPhone}
         email={email}
         setEmail={setEmail}
         handleSubmit={handleSubmit}
         />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={props.contacts}/>
      </section>
    </div>
  );
};
