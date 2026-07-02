import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/uiSlice";
import { logout } from "../features/authSlice";
import { toast } from "react-toastify";
import { FaBell, FaMoon, FaSun, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.ui.theme);
  const user = useSelector((s) => s.auth.user);

  const doLogout = () => {
    dispatch(logout());
    toast.success("Logged out!");
  };

  return (
    <nav className="navbar-shell">
      <div className="navbar-brand-group">
        <button className="icon-btn d-md-none" onClick={onMenuClick} aria-label="Open menu">
          <FaBars />
        </button>
        <div className="navbar-brand-badge">₹</div>
        <div>
          <h5 className="navbar-brand-title">Swapnil Business Hub</h5>
          <div className="navbar-brand-subtitle">Indian business command center</div>
        </div>
      </div>

      <div className="navbar-actions">
        <div className="ghost-btn d-none d-md-flex">
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <button className="icon-btn" onClick={() => dispatch(toggleTheme())} aria-label="Toggle theme">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
        <Link className="icon-btn" to="/notifications" aria-label="Notifications">
          <FaBell />
        </Link>
        <button className="ghost-btn" onClick={doLogout}>Hi, {user || "Admin"}</button>
      </div>
    </nav>
  );
}
