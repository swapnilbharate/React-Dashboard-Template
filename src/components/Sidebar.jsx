import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaCog,
  FaBell,
  FaUserCircle,
  FaBars,
  FaUserAlt
} from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const { user, role } = useSelector((state) => state.auth);

  const active = (path) =>
    location.pathname === path ? "active-link" : "";

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center px-2 mb-3">
        {!collapsed && <h5 className="sidebar-title">Company Panel</h5>}

        <FaBars
          className="toggle-icon"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* PROFILE CARD */}
      <div className="profile-card-modern">
        <div className="profile-image-wrapper">
          <FaUserCircle className="profile-avatar" />
        </div>

        {!collapsed && (
          <div className="profile-info">
            <h6 className="profile-name">{user || "Guest User"}</h6>

            <span className={`role-badge ${role || "user"}`}>
              {role ? role.toUpperCase() : "USER"}
            </span>

            <Link to="/profile" className="profile-edit-link">
              View Profile
            </Link>
          </div>
        )}
      </div>

      {/* MENU ITEMS – NOW VISIBLE TO ALL USERS */}
      <ul className="nav flex-column">

        <li>
          <Link to="/" className={`nav-link ${active("/")}`}>
            <FaHome className="menu-icon" />
            {!collapsed && "Dashboard"}
          </Link>
        </li>

        <li>
          <Link to="/profile" className={`nav-link ${active("/profile")}`}>
            <FaUserAlt className="menu-icon" />
            {!collapsed && "Profile"}
          </Link>
        </li>

        <li>
          <Link to="/users" className={`nav-link ${active("/users")}`}>
            <FaUsers className="menu-icon" />
            {!collapsed && "Users"}
          </Link>
        </li>

        <li>
          <Link to="/reports" className={`nav-link ${active("/reports")}`}>
            <FaChartBar className="menu-icon" />
            {!collapsed && "Reports"}
          </Link>
        </li>

        <li>
          <Link to="/settings" className={`nav-link ${active("/settings")}`}>
            <FaCog className="menu-icon" />
            {!collapsed && "Settings"}
          </Link>
        </li>

        <li>
          <Link
            to="/notifications"
            className={`nav-link ${active("/notifications")}`}
          >
            <FaBell className="menu-icon" />
            {!collapsed && "Notifications"}
          </Link>
        </li>

      </ul>
    </div>
  );
}
