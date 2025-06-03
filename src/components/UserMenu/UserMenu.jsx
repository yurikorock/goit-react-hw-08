import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

import { deleteContact } from "../../redux/contacts/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
      await dispatch(logout()).unwrap();
      console.log("Logout successful");
      dispatch(deleteContact());
    } catch (error) {
      console.error("Logout failed:", error);
      dispatch(deleteContact());
    }
  };
  return (
    <div>
      <p>Hello, {user.name}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
