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

  return (
    <div className="container mt-4">
      <h3>⚙️ Account Settings</h3>
      <hr />

      <div className="card p-3 mb-3">
        <h5>Profile Settings</h5>

        <label>Email</label>
        <input
          className="form-control mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Change Password</label>
        <input
          type="password"
          className="form-control mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
        />

        <button className="btn btn-primary mt-2">
          Update Profile
        </button>
      </div>

      <div className="card p-3 mb-3">
        <h5>Notification Preferences</h5>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={notifyEmail}
            onChange={() => setNotifyEmail(!notifyEmail)}
          />
          <label>Email Notifications</label>
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={notifySMS}
            onChange={() => setNotifySMS(!notifySMS)}
          />
          <label>SMS Notifications</label>
        </div>
      </div>

      {role === "admin" && (
        <div className="card p-3">
          <h5>Admin Controls</h5>

          <button className="btn btn-warning me-2">
            Reset System Cache
          </button>

          <button className="btn btn-danger">
            Clear Logs
          </button>
        </div>
      )}
    </div>
  );
}
