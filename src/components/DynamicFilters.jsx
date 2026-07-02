import { useState } from "react";

export default function DynamicFilters({ onFilter }) {
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  const applyFilter = () => onFilter({ category, status, search });
  const resetFilter = () => {
    setCategory("all");
    setStatus("all");
    setSearch("");
    onFilter({ category: "all", status: "all", search: "" });
  };

  return (
    <div className="glass-card p-3 mb-3">
      <h5>Advanced Filters</h5>
      <div className="filter-shell mt-2">
        <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option><option value="sales">Sales</option><option value="finance">Finance</option><option value="hr">HR</option><option value="it">IT</option>
        </select>
        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="all">All</option><option value="completed">Completed</option><option value="pending">Pending</option>
        </select>
        <input className="form-control" placeholder="Search reports" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="btn btn-primary" onClick={applyFilter}>Apply</button>
        <button className="btn btn-outline" onClick={resetFilter}>Reset</button>
      </div>
    </div>
  );
}
