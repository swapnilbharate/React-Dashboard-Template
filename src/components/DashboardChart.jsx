import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { monthlyRevenue } from "../mockData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: monthlyRevenue,
        backgroundColor: (context) => context.dataIndex % 2 === 0 ? "rgba(99, 102, 241, 0.9)" : "rgba(124, 58, 237, 0.9)",
        borderRadius: 12,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: { y: { beginAtZero: true, grid: { color: "rgba(148,163,184,0.18)" } }, x: { grid: { display: false } } }
  };

  return (
    <div className="chart-card">
      <h5>Revenue Trend <span className="badge-pill online">+18.4%</span></h5>
      <div style={{ height: 280 }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
