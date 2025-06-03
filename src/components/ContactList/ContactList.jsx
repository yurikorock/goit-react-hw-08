import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

export default function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
}
