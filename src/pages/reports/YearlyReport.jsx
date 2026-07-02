import { useState } from "react";
import { Bar } from "react-chartjs-2";

import StatsCards from "../../components/StatsCards";
import ExportButtons from "../../components/ExportButtons";
import DynamicFilters from "../../components/DynamicFilters";
import DateFilter from "../../components/DateFilter";

export default function MonthlyReport() {
  const [filteredData, setFilteredData] = useState([]);

  const sampleData = [
    { name: "January", sales: 1200, category: "sales" },
    { name: "February", sales: 1800, category: "finance" },
    { name: "March", sales: 900, category: "it" },
    { name: "April", sales: 2000, category: "sales" },
  ];

  const handleFilter = (filter) => {
    let result = sampleData;

    if (filter.category !== "all") {
      result = result.filter((d) => d.category === filter.category);
    }

    if (filter.search) {
      result = result.filter((d) =>
        d.name.toLowerCase().includes(filter.search.toLowerCase())
      );
    }

    setFilteredData(result);
  };

  const displayData = filteredData.length ? filteredData : sampleData;

  const barData = {
    labels: displayData.map((d) => d.name),
    datasets: [
      {
        label: "Monthly Sales",
        data: displayData.map((d) => d.sales),
        backgroundColor: "#4b6cb7",
      },
    ],
  };

  return (
    <div>
      <h3>📅 Monthly Report & Analytics</h3>

      <DynamicFilters onFilter={handleFilter} />

      <DateFilter
        start={new Date()}
        end={new Date()}
        setStart={() => {}}
        setEnd={() => {}}
      />

      <StatsCards />

      <ExportButtons data={displayData} />

      <div className="chart-card mt-4">
        <h5>Sales Comparison</h5>
        <Bar data={barData} />
      </div>
    </div>
  );
}
