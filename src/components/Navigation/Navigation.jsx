//Navigation.jsx
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
