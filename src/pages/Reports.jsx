import { useEffect, useState } from "react";
import { getUsers, getTodos } from "../services/reportService";
import DateFilter from "../components/DateFilter";
import ExportButtons from "../components/ExportButtons";
import ComparisonChart from "../components/ComparisonChart";
import DynamicFilters from "../components/DynamicFilters";
import { reportSummaries } from "../mockData";

export default function Reports() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [todos, setTodos] = useState([]);
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const loadData = async () => {
    const u = await getUsers();
    setUsers(u);
    setFilteredUsers(u);
    setTodos(await getTodos());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
  }, []);

  const handleFilter = (filter) => {
    let result = users;
    if (filter.search) {
      result = result.filter((u) => u.name.toLowerCase().includes(filter.search.toLowerCase()));
    }
    setFilteredUsers(result);
  };

  return (
    <div>
      <h3 className="page-title">Performance Reports</h3>
      <p className="page-subtitle">Monitor execution, revenue, and delivery across your team.</p>

      <div className="stats-grid mb-4">
        {reportSummaries.map((item) => (
          <div key={item.label} className="glass-card p-3">
            <div className="page-subtitle">{item.label}</div>
            <h3 className="mt-2">{item.value}</h3>
            <span className="badge-pill online">{item.change}</span>
          </div>
        ))}
      </div>

      <DynamicFilters onFilter={handleFilter} />
      <DateFilter start={start} end={end} setStart={setStart} setEnd={setEnd} />

      <ComparisonChart />

      <div className="table-card mt-4">
        <h5>User Detailed Report</h5>
        <ExportButtons data={filteredUsers} />
        <table>
          <thead><tr><th>Name</th><th>Email</th><th>Company</th></tr></thead>
          <tbody>{filteredUsers.map((u) => <tr key={u.id}><td>{u.name}</td><td>{u.email}</td><td>{u.company?.name || "Northstar"}</td></tr>)}</tbody>
        </table>
      </div>

      <div className="table-card mt-4">
        <h5>Task Completion Report</h5>
        <ExportButtons data={todos} />
        <table>
          <thead><tr><th>Task</th><th>Status</th></tr></thead>
          <tbody>{todos.map((t) => <tr key={t.id}><td>{t.title}</td><td>{t.completed ? "Completed" : "Pending"}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

