import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-shell">
      <Navbar onMenuClick={() => setMobileOpen(true)} />
      <div className="app-layout">
        <Sidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <div className="app-content">
          <Outlet />
        </div>
      </div>
      {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
    </div>
  );
}
