import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/uiSlice";
import { logout } from "../features/authSlice";
import { toast } from "react-toastify";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.ui.theme);

  const doLogout = () => {
    dispatch(logout());
    toast.success("Logged out!");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">Dashboard</span>

      <div>
        <button
          className="btn btn-light me-2"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme}
        </button>

        <button className="btn btn-danger" onClick={doLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
