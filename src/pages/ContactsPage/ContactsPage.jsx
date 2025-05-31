//ContactPage.jsx

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/Searchbox";
import ContactList from "../../components/ContactList/ContactList";

export const ContactsPage = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
