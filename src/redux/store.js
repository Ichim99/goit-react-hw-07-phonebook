import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { contactsSlice } from './contacts';
import { filterSlice } from './filters';

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  }),
});