import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from "store/contactSlice";
import { useSelector, useDispatch } from "react-redux";
import { Contact, List, ButtonDelete, ContactInfo, Number, Name } from "./ContactList.styled";

const ContactList = () => {
    const contacts = useSelector(state => state.myContact.contacts);
    const filter = useSelector(state => state.myContact.filter);
    const dispatch = useDispatch();
 
    const contactDelete = (id) => {
        dispatch(deleteContact(id))
        toast.warn(`You deleted contact from your phonebook.`, {
            position: toast.POSITION.TOP_CENTER
        });
    };

    const filteredContacts = () => contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (<>
        <List>
            {filteredContacts().map((contact) => {
                let id = contact.id
                return <Contact key={contact.id}>
                    <ContactInfo>
                        <Name>{contact.name}</Name>
                        <Number> : {contact.number}</Number>
                    </ContactInfo>
                    <ButtonDelete onClick={() => contactDelete(id)}>delete</ButtonDelete></Contact>
            })};
        </List></>
    );
};
 
export default ContactList;