import React from "react";
import { useDispatch } from "react-redux";
import { filteredContact } from "store/contactSlice";
import { InputForm, Label } from "components/ContactForm/ContactForm.styled";

const Filter = () => {
    const dispatch = useDispatch()

    return (
        <Label>Find contact by name
            <InputForm
                onChange={(e)=>dispatch(filteredContact(e.target.value))}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </Label>
    );
};

export default Filter