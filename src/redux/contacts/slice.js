//slice.js from contacts
import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  // Додаємо обробку зовнішніх екшенів
  extraReducers: (builder) => {
    builder
      //fetchContacts
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //addContact
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //deleteContact
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        if (action.payload === "Request failed with status code 401") {
          state.error = null;
        } else {
          state.error = action.payload;
        }
      })
      //delete all contact when user logout
      .addCase(logOut.pending, (state) => {
        state.items = [];
        state.error = null;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.items = [];
        state.error = null;
      });
  },
});

export default contactsSlice.reducer;
