import { recentUsers, getInitials } from "../mockData";

export default function RecentUsers() {
  return (
    <div className="panel-card">
      <h5>Recent Users</h5>
      <div className="user-list">
        {recentUsers.map((user) => (
          <div key={user.email} className="user-row">
            <div className="user-meta">
              <div className="user-avatar">{getInitials(user.name)}</div>
              <div>
                <strong>{user.name}</strong>
                <div className="page-subtitle">{user.email}</div>
              </div>
            </div>
            <div className="text-end">
              <span className={`badge-pill ${user.status.toLowerCase() === "online" ? "online" : user.status.toLowerCase() === "busy" ? "busy" : "away"}`}>{user.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
