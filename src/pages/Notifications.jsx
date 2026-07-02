import { useSelector } from "react-redux";

export default function Notifications() {
  const auth = useSelector((state) => state.auth || {});
  const role = auth.role || "admin";

  const notifications = [
    {
      id: 1,
      title: "New User Registered",
      message: "A new user signed up today.",
      type: "info",
      adminOnly: true
    },
    {
      id: 2,
      title: "System Update",
      message: "System maintenance scheduled at 10 PM.",
      type: "warning",
      adminOnly: false
    },
    {
      id: 3,
      title: "Monthly Report Ready",
      message: "Your monthly performance report is ready.",
      type: "success",
      adminOnly: false
    },
    {
      id: 4,
      title: "Security Alert",
      message: "Unusual login detected.",
      type: "danger",
      adminOnly: true
    }
  ];

  const filtered = notifications.filter(
    (n) => !n.adminOnly || role === "admin"
  );

  return (
    <div className="container mt-4">
      <h3>🔔 Notifications</h3>
      <hr />

      {filtered.length === 0 && (
        <p className="text-muted">No notifications available.</p>
      )}

      {filtered.map((n) => (
        <div key={n.id} className={`alert alert-${n.type}`}>
          <strong>{n.title}</strong>
          <p className="mb-0">{n.message}</p>
        </div>
      ))}
    </div>
  );
}
