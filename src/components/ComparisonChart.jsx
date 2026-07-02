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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ComparisonChart() {
  const data = {
    labels: ["Users", "Orders", "Revenue", "Profit"],
    datasets: [
      {
        label: "2023",
        data: [100, 200, 300, 400],
        backgroundColor: "green",
      },
      {
        label: "2024",
        data: [150, 250, 350, 450],
        backgroundColor: "orange",
      },
    ],
  };

  return (
    <div className="chart-card mt-4">
      <h5>Year Comparison</h5>
      <Bar data={data} />
    </div>
  );
}
