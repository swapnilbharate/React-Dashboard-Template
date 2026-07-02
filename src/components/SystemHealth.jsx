export default function SystemHealth() {
  const health = [
    { label: "Server Status", value: "Online", color: "success" },
    { label: "Database", value: "Connected", color: "primary" },
    { label: "API Response", value: "Fast", color: "info" },
    { label: "Errors Today", value: "0", color: "danger" },
  ];

  return (
    <div
      className="card p-3 shadow-sm mt-3"
      style={{
        transition: "0.3s",
        animation: "fadeIn 1s",
        borderLeft: "5px solid orange",
      }}
    >
      <h5 style={{ color: "orange" }}>🛠 System Health</h5>

      <ul className="list-group mt-2">
        {health.map((h, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between"
            style={{
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "#f9f9f9")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "white")
            }
          >
            <span>{h.label}</span>

            <span className={`badge bg-${h.color}`}>
              {h.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
