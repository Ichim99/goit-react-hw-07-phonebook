import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { nanoid } from 'nanoid';



export const ContactForm = ({ addContact }) => {
    const handleFormSubmit = event => {
      event.preventDefault();
      const name = event.target.name.value;
      const number = event.target.number.value;
      addContact({ id: nanoid(), name, number });
      event.target.reset();
    };
  
    return (
      <div className={style.container}> 
        <h1 className={style.title}>Phonebook</h1>
        <form className={style.containerInput} onSubmit={handleFormSubmit}>
          <label>Name
            <input
              type="text"
              name="name"
              className={style.input}
              pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>Number
            <input
              type="tel"
              name="number"
              className={style.input}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit" className={style.button}>Add Contact</button>
        </form>
      </div>
    );
  };
  
  ContactForm.propTypes = {
    number: PropTypes.string,
    name: PropTypes.string,
    addContact: PropTypes.func.isRequired,
  };