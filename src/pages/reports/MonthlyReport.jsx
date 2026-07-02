import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import StatsCards from "../../components/StatsCards";
import ExportButtons from "../../components/ExportButtons";
import DynamicFilters from "../../components/DynamicFilters";
import DateFilter from "../../components/DateFilter";
import ComparisonChart from "../../components/ComparisonChart";
import { getUsers, getTodos } from "../../services/reportService";


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
      result = result.filter((u) =>
        u.name.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    setFilteredUsers(result);
  };

  return (
    <div>
      <h3>📈 Advanced Reports & Analytics</h3>

      <DynamicFilters onFilter={handleFilter} />

      <DateFilter
        start={start}
        end={end}
        setStart={setStart}
        setEnd={setEnd}
      />

      <h4 className="mt-4">📊 Comparative Analysis</h4>
      <ComparisonChart />

      <hr />

      <h4>User Detailed Report</h4>

      <ExportButtons data={filteredUsers} />

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-4">Task Completion Report</h4>

      <ExportButtons data={todos} />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.completed ? "Completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
