import { useSelector } from "react-redux";
import { useState } from "react";

export default function Settings() {
  const auth = useSelector((state) => state.auth || {});
  const role = auth.role || "admin";
  const user = auth.user || "Admin User";
  const [email, setEmail] = useState(user);
  const [password, setPassword] = useState("");
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySMS, setNotifySMS] = useState(false);
  const [themeMode, setThemeMode] = useState("System");

  return (
    <div>
      <h3 className="page-title">Preferences</h3>
      <p className="page-subtitle">Tune your workspace, security, and notification settings.</p>

      <div className="grid-2">
        <div className="settings-card">
          <h5>General</h5>
          <label className="mt-2">Email</label>
          <input className="form-control mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Change Password</label>
          <input type="password" className="form-control mb-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" />
          <button className="btn btn-primary mt-2">Update Profile</button>
        </div>

        <div className="settings-card">
          <h5>Preferences</h5>
          <div className="toggle-row"><span>Weekly summary</span><label className="switch"><input type="checkbox" defaultChecked /><span className="slider" /></label></div>
          <div className="toggle-row"><span>Email notifications</span><label className="switch"><input type="checkbox" checked={notifyEmail} onChange={() => setNotifyEmail(!notifyEmail)} /><span className="slider" /></label></div>
          <div className="toggle-row"><span>SMS reminders</span><label className="switch"><input type="checkbox" checked={notifySMS} onChange={() => setNotifySMS(!notifySMS)} /><span className="slider" /></label></div>
          <select className="form-select mt-3" value={themeMode} onChange={(e) => setThemeMode(e.target.value)}>
            <option>System</option><option>Light</option><option>Dark</option>
          </select>
        </div>
      </div>

      {role === "admin" && (
        <div className="settings-card mt-4">
          <h5>Admin Controls</h5>
          <button className="btn btn-outline me-2">Reset system cache</button>
          <button className="btn btn-danger">Clear logs</button>
        </div>
      )}
    </div>
  );
}
