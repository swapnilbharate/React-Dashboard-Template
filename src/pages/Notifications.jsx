import { useMemo, useState } from "react";
import { notificationsSeed } from "../mockData";

export default function Notifications() {
  const [notifications, setNotifications] = useState(notificationsSeed);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => notifications.filter((item) => filter === "All" || item.category === filter || (filter === "Unread" && item.unread)), [filter, notifications]);

  return (
    <div>
      <h3 className="page-title">Notifications</h3>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="page-subtitle mb-0">Stay on top of key moments and updates.</p>
        <div className="d-flex gap-2">
          <button className="btn btn-outline btn-sm" onClick={() => setFilter("All")}>All</button>
          <button className="btn btn-outline btn-sm" onClick={() => setFilter("Unread")}>Unread</button>
          <button className="btn btn-primary btn-sm" onClick={() => setNotifications((items) => items.map((item) => ({ ...item, unread: false })))}>Mark all read</button>
        </div>
      </div>

      <div className="notification-list">
        {filtered.map((item) => (
          <div key={item.id} className={`notification-item ${item.unread ? "unread" : ""}`}>
            <span className="notification-dot" />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <strong>{item.title}</strong>
                <span className="page-subtitle">{item.time}</span>
              </div>
              <div className="page-subtitle mt-1">{item.message}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
