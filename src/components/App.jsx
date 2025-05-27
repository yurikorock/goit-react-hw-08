//App.jsx

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/Searchbox";
import { useSelector, useDispatch } from "react-redux";
import { AppBar } from "./AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";

import { changeFilter } from "../redux/filtersSlice";
import { useEffect } from "react";
import { fetchContacts, addContact, deleteContact } from "../redux/contactsOps";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector((state) => state.filters.name);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleFilterChange = (value) => {
    dispatch(changeFilter(value));
  };
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <h1 className="title">Phonebook</h1>
        <ContactForm onAdd={handleAddContact} />
        <SearchBox value={filter} onSearch={handleFilterChange} />
        <ContactList onDelete={handleDeleteContact} /> */}
      </Routes>
    </div>
  );
};
export default App;
