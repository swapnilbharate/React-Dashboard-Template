import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <Sidebar />

        <div className="content p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
