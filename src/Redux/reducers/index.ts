// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import { contacts } from './contacts';
import { sidebar } from './sidebar';

const rootReducer = combineReducers({
  contacts: contacts,
  sidebar: sidebar
});

export default rootReducer;
