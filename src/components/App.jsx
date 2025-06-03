//App.jsx

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";

import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/Searchbox";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { ContactsPage } from "../pages/ContactsPage/ContactsPage";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing, selectIsLoggedIn } from "../redux/auth/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import Layout from "./Layout/Layout";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
};
export default App;
