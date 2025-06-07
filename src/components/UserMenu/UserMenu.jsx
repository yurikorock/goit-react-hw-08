import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import { deleteContact } from "../../redux/contacts/operations";
import { logOut } from "../../redux/auth/operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
      await dispatch(logOut()).unwrap();
      console.log("Logout successful");
      dispatch(deleteContact());
    } catch (error) {
      console.error("Logout failed:", error);
      dispatch(deleteContact());
    }
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.username}>Hello, {user.name}</p>
      <button onClick={handleLogout} className={styles.button}>
        Log Out
      </button>
    </div>
  );
}
