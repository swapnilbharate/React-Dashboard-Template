import { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

// Register required elements
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ApiChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((d) => setData(d.slice(0, 10)));
  }, []);

  const chartData = {
    labels: data.map((d) => `Task ${d.id}`),
    datasets: [
      {
        label: "Tasks",
        data: data.map((d) => d.id),
        borderColor: "#4b6cb7",
        backgroundColor: "rgba(75, 108, 183, 0.3)",
        tension: 0.3,
        pointRadius: 5
      },
    ],
  };

  return (
    <div className="chart-card">
      <h5>API Based Chart</h5>
      <Line data={chartData} />
    </div>
  );
}
