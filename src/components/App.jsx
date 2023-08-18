import { useState } from "react";
import { nanoid } from 'nanoid'
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import ContactForm from "./ContactForm/ContactForm";
import { Container } from "./App.styled";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, filteredContact, setContacts } from "store/contactSlice";

const App = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.myContact.contacts)
  const filter = useSelector(state => state.myContact.filter)
  const dispatch = useDispatch()

  const checkName = (e) => {
    return contacts.some(contact =>
      contact.name.toLowerCase() === e.target.value)
  };
    
  const handleInputChange = e => {
    e.target.name === "name"
      ? setName(e.target.value)
      : e.target.name === "number"
        ? setNumber(e.target.value)
        : dispatch(filteredContact(e.target.value))
    checkName(e)
  };

  const handleSubmit = e => {
    e.preventDefault()
    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      toast.error(`${name} is already in contact !`, {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    };
    let contact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(setContacts(contact))

    toast.success(`You add contact ${name} to your phonebook.`, {
      position: toast.POSITION.TOP_CENTER
    });

    e.target.reset()
  };

  const contactDelete = (id) => {
    dispatch(deleteContact(id))
    toast.warn(`You deleted contact ${name} from your phonebook.`, {
      position: toast.POSITION.TOP_CENTER
    });
  };
  
  const filteredContacts = () => contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit}
        handleInputChange={handleInputChange} />
      <h2>Contacts</h2>
      <Filter handleInputChange={handleInputChange} />
      <ContactList
        contacts={filteredContacts()}
        contactDelete={contactDelete} />
      <ToastContainer />
    </Container>
  );
};
 
export default App;
