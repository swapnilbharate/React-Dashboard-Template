export default function ActivityFeed() {
  const activities = [
    { text: "Admin logged in", type: "success" },
    { text: "New user registered", type: "info" },
    { text: "Report generated", type: "primary" },
    { text: "System settings updated", type: "warning" },
    { text: "Password changed", type: "danger" },
  ];

  return (
    <div
      className="card p-3 shadow-sm"
      style={{
        transition: "0.3s",
        animation: "fadeIn 0.8s",
        borderLeft: "5px solid green",
      }}
    >
      <h5 style={{ color: "green" }}>⚡ Recent Activity</h5>

      <ul className="list-group mt-2">
        {activities.map((a, i) => (
          <li
            key={i}
            className={`list-group-item list-group-item-${a.type}`}
            style={{
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {a.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
