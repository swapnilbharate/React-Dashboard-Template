import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHome, FaUsers, FaChartBar, FaCog, FaBell, FaUserCircle, FaBars, FaUserAlt } from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const { user, role } = useSelector((state) => state.auth);

  const active = (path) => (location.pathname === path ? "active-link" : "");
  const menuItems = [
    { path: "/", label: "Dashboard", icon: <FaHome className="menu-icon" /> },
    { path: "/profile", label: "Profile", icon: <FaUserAlt className="menu-icon" /> },
    { path: "/users", label: "Users", icon: <FaUsers className="menu-icon" /> },
    { path: "/reports", label: "Reports", icon: <FaChartBar className="menu-icon" /> },
    { path: "/settings", label: "Settings", icon: <FaCog className="menu-icon" /> },
    { path: "/notifications", label: "Notifications", icon: <FaBell className="menu-icon" />, badge: "3" }
  ];

  return (
    <aside className={`sidebar-shell ${isOpen ? "open" : "mobile-hidden"}`}>
      <div className="sidebar-header">
        <h5 className="sidebar-title">Swapnil</h5>
        <FaBars className="sidebar-toggle" onClick={onClose} />
      </div>

      <div className="profile-card-modern">
        <FaUserCircle className="profile-avatar" />
        <h6 className="profile-name">{user || "Guest User"}</h6>
        <span className={`role-badge ${role || "user"}`}>{role ? role.toUpperCase() : "USER"}</span>
        <div className="mt-2">
          <Link to="/profile" className="profile-edit-link" onClick={onClose}>View Profile</Link>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${active(item.path)}`}
            onClick={onClose}
          >
            {item.icon}
            <span>{item.label}</span>
            {item.badge && <span className="sidebar-badge">{item.badge}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
