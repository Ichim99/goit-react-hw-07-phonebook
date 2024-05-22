import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, setFilter } from './actions';

// Obține contactele stocate din localStorage sau setează starea inițială ca un array gol
const storedContacts = localStorage.getItem('contacts');
const contactsInitialState = storedContacts ? JSON.parse(storedContacts) : [];

// Starea inițială pentru filtrare
const filterInitialState = '';

// Reducer pentru contacte
export const contactsReducer = createReducer(contactsInitialState, (builder) => {
  builder
    .addCase(addNewContact, (state, action) => {
      const newState = [...state, action.payload];
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    })
    .addCase(deleteContact, (state, action) => {
      const newState = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(newState));
      return newState;
    });
});

// Reducer pentru filtrare
export const filterReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase(setFilter, (state, action) => action.payload);
});