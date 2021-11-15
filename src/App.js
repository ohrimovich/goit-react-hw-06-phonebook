import "./App.css";
import { useState, useEffect } from 'react'
import ContactForm from "./components/ContactForm";
import { nanoid } from "nanoid";
import ContactList from "./components/ContactLIst";
import Filter from "./components/Filter";

function App () {
 
  // const [contacts, setContacts] = useState([]);
  // const [filterValue, setFilterValue] = useState('');

  
  // const formSubmitHandler = ( name, number ) => {
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert( name + 'is already in contacts' )
  //     return;
  //   }
  
  //   setContacts(prevContact => [{
  //       name,
  //       number,
  //       id: nanoid()
  //   },
  //     ...prevContact
  //   ]

  //   )
    
  // };

  // const changeFilter = (filteredValue) => {
  //   setFilterValue(filteredValue);
  // }

  // const getFilteredContactList = () => {
  //           return contacts.filter(
  //     contact => contact.name.toLocaleLowerCase()
  //       .includes(filterValue.toLocaleLowerCase())
  //   )
    
  // }

  // const deleteContact = (id) => {
  //   setContacts(contacts.filter(contact => contact.id !== id))
      
  // }

  // useEffect(() => {
  //   const parsedContacts = JSON.parse(localStorage.getItem('contacts'))
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
    
  // }, [])

  // useEffect(() => {
  
  //   if (contacts.length !== 0) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts))
  //   }
      
  // }, [contacts])

    return (
      <div className='container'>
        <h1>PhoneBook</h1>
        <ContactForm/>
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    ) 
  };


export default App;


