import { useSelector } from "react-redux";
import { Navigation } from "../Navigation/Navigation";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import styles from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
