import React from "react";
import { Button, FormContainer, InputForm, Label } from "./ContactForm.styled";
import PropTypes from 'prop-types';

const ContactForm = ({ handleInputChange, handleSubmit }) => {
  
  return (
    <div>
      <FormContainer onSubmit={handleSubmit}>
        <Label>Name
          <InputForm
            type="text"
            placeholder="Name"
            name="name"
            title="Name"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Label>Number
          <InputForm
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?[0-9\s\-\(\)]+"
            title="Phone number"
            required
            onChange={handleInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    </div>
  );
};

ContactForm.propTypes = {
    handleInputChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}
 
export default ContactForm;