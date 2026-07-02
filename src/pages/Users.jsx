import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import ExportButtons from "../components/ExportButtons";
import AddUserModal from "../components/AddUserModal";
import { usersSeed } from "../mockData";

export default function Users() {
  const [users, setUsers] = useState(usersSeed);
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = useMemo(() => users.filter((user) => `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())), [search, users]);

  const handleAddUser = (newUser) => {
    setUsers((prev) => [{ ...newUser, id: newUser.id || Date.now() }, ...prev]);
    toast.success(`${newUser.name} was added to the business directory.`);
  };

  return (
    <div>
      <h3 className="page-title">Team Directory</h3>
      <p className="page-subtitle">Search, review, export, and onboard your most important collaborators.</p>

      <div className="filter-shell">
        <input className="form-control" placeholder="Search users" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="btn btn-outline btn-sm" onClick={() => setView(view === "grid" ? "table" : "grid")}>Switch to {view === "grid" ? "table" : "grid"}</button>
        <button className="btn btn-primary btn-sm" onClick={() => setIsModalOpen(true)}>Add User</button>
        <ExportButtons data={filteredUsers} filename="bharat-team-directory" />
      </div>

      {view === "grid" ? (
        <div className="grid-3">
          {filteredUsers.map((user) => (
            <div key={user.id} className="glass-card p-3">
              <div className="d-flex align-items-center gap-3">
                <div className="user-avatar">{user.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
                <div>
                  <strong>{user.name}</strong>
                  <div className="page-subtitle">{user.email}</div>
                </div>
              </div>
              <div className="mt-3 d-flex flex-wrap gap-2">
                <span className="badge-pill online">{user.role}</span>
                <span className="badge-pill away">{user.status}</span>
              </div>
              <div className="page-subtitle mt-2">{user.department} • {user.location}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="table-card">
          <table>
            <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Location</th></tr></thead>
            <tbody>{filteredUsers.map((user) => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td><td>{user.status}</td><td>{user.location}</td></tr>)}</tbody>
          </table>
        </div>
      )}

      <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddUser} />
    </div>
  );
}
