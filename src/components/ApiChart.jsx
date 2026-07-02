import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { trafficSources } from "../mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ApiChart() {
  const data = {
    labels: trafficSources.map((source) => source.label),
    datasets: [
      {
        data: trafficSources.map((source) => source.value),
        backgroundColor: trafficSources.map((source) => source.color),
        borderWidth: 0,
        hoverOffset: 8
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "72%",
    plugins: { legend: { position: "bottom" } }
  };

  return (
    <div className="chart-card">
      <h5>Traffic Mix <span className="badge-pill online">Live</span></h5>
      <div style={{ height: 280 }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
