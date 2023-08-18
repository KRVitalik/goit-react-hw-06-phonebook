import React from "react";
import { Contact, List, ButtonDelete, ContactInfo, Number, Name } from "./ContactList.styled";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from "store/contactSlice";

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
            }
            )}
        </List></>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
    contactDelete: PropTypes.func,
}
 
export default ContactList;