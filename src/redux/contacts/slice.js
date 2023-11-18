import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


const pendingState = state => {
  state.isLoading = true;
};

const rejectedState = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, pendingState)
            .addCase(addContact.pending, pendingState)
            .addCase(deleteContact.pending, pendingState)
            .addCase(fetchContacts.rejected, rejectedState)
            .addCase(addContact.rejected, rejectedState)
            .addCase(deleteContact.rejected, rejectedState)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;

                const index = state.items.findIndex(contact => contact.id === action.payload.id);
                state.items.splice(index, 1);
            })
    },
});

export const contactsReduser = contactsSlice.reducer;