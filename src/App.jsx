import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Layout from "./components/Layout";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

import Reports from "./pages/Reports";
import MonthlyReport from "./pages/reports/MonthlyReport";
import YearlyReport from "./pages/reports/YearlyReport";

import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route path="users" element={<Users />} />

          <Route path="reports" element={<Reports />} />
          <Route path="reports/monthly" element={<MonthlyReport />} />
          <Route path="reports/yearly" element={<YearlyReport />} />

          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />

        </Route>

        <Route path="*" element={<h3>Page Not Found</h3>} />

      </Routes>
    </BrowserRouter>
  );
}
