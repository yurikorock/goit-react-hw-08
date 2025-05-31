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
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";
import { changeFilter } from "../redux/filtersSlice";
import { PrivateRoute } from "./PrivateRoute";
import { useEffect } from "react";
import { fetchContacts, addContact, deleteContact } from "../redux/contactsOps";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

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

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts">
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
