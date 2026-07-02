export default function RecentUsers() {
  const users = [
    { name: "Amit", email: "amit@mail.com" },
    { name: "Rahul", email: "rahul@mail.com" },
    { name: "Sneha", email: "sneha@mail.com" },
  ];

  return (
    <div
      className="card p-3 shadow-sm"
      style={{
        transition: "0.3s",
        animation: "fadeIn 0.6s",
        borderLeft: "5px solid #4b6cb7",
      }}
    >
      <h5 style={{ color: "#4b6cb7" }}>👤 Recent Users</h5>

      <table className="table mt-2">
        <thead style={{ background: "#4b6cb7", color: "white" }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr
              key={i}
              style={{
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#f1f1f1")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "white")
              }
            >
              <td>
                <span
                  className="badge bg-primary me-2"
                  style={{ fontSize: "12px" }}
                >
                  Active
                </span>
                {u.name}
              </td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
