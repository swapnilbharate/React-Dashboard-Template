import { useState } from "react";

export default function DynamicFilters({ onFilter }) {
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");

  const applyFilter = () => {
    onFilter({ category, status, search });
  };

  const resetFilter = () => {
    setCategory("all");
    setStatus("all");
    setSearch("");

    onFilter({
      category: "all",
      status: "all",
      search: "",
    });
  };

  return (
    <div className="card p-3 mb-3">
      <h5>🔍 Advanced Filters</h5>

      <div className="row mt-2">
        <div className="col-md-4">
          <label>Category</label>
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="sales">Sales</option>
            <option value="finance">Finance</option>
            <option value="hr">HR</option>
            <option value="it">IT</option>
          </select>
        </div>

        <div className="col-md-4">
          <label>Status</label>
          <select
            className="form-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="col-md-4">
          <label>Search</label>
          <input
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-primary me-2" onClick={applyFilter}>
          Apply Filter
        </button>

        <button className="btn btn-secondary" onClick={resetFilter}>
          Reset
        </button>
      </div>
    </div>
  );
}
