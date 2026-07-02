import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { yearlyReportData } from "../mockData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ComparisonChart() {
  const data = {
    labels: yearlyReportData.map((item) => item.name),
    datasets: [
      { label: "Revenue", data: yearlyReportData.map((item) => item.revenue), backgroundColor: "rgba(99, 102, 241, 0.85)", borderRadius: 10 },
      { label: "Customers", data: yearlyReportData.map((item) => item.customers), backgroundColor: "rgba(16, 185, 129, 0.85)", borderRadius: 10 }
    ]
  };

  return (
    <div className="chart-card mt-4">
      <h5>Year-over-Year Comparison</h5>
      <div style={{ height: 280 }}>
        <Bar data={data} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "top" } }, scales: { y: { beginAtZero: true } } }} />
      </div>
    </div>
  );
}
