import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/slice";
import { filterReduser } from "./filter/slice";
import { authReducer } from "./auth/slice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReduser,
    filter: filterReduser,
  },
});