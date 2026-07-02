import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales",
        data: [30, 45, 28, 80, 60],
        backgroundColor: [
          "#4b6cb7",
          "#764ba2",
          "#43cea2",
          "#f7971e",
          "#ff512f"
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Overview",
      },
    },
  };

  return (
    <div className="chart-card">
      <h5>Monthly Sales</h5>
      <Bar data={data} options={options} />
    </div>
  );
}
