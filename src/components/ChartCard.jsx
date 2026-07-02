import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ChartCard() {
  const data = {
    labels: ["Users", "Reports", "Settings"],
    datasets: [
      {
        data: [10, 5, 3],
        backgroundColor: ["red", "blue", "green"],
      },
    ],
  };

  return <Pie data={data} />;
}
