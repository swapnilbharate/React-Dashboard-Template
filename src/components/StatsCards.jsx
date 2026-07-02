import { useEffect, useState } from "react";
import { FaUsers, FaMoneyBill, FaShoppingCart, FaChartLine } from "react-icons/fa";

export default function StatsCards() {

  const [users, setUsers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [orders, setOrders] = useState(0);
  const [growth, setGrowth] = useState(0);

  // INITIAL FAST COUNTING ANIMATION
  useEffect(() => {
    const initInterval = setInterval(() => {
      setUsers((u) => (u < 588 ? u + 2 : 588));
      setRevenue((r) => (r < 38560 ? r + 80 : 88560));
      setOrders((o) => (o < 265 ? o + 1 : 265));
      setGrowth((g) => (g < 12 ? g + 1 : 12));
    }, 40);

    setTimeout(() => {
      clearInterval(initInterval);
    }, 2500);

    return () => clearInterval(initInterval);
  }, []);

  // CONTINUOUS REALISTIC UPDATES AFTER ANIMATION
  useEffect(() => {
    const liveInterval = setInterval(() => {
      setUsers((prev) => prev + Math.floor(Math.random() * 3));
      setRevenue((prev) => prev + Math.floor(Math.random() * 50));
      setOrders((prev) => prev + Math.floor(Math.random() * 2));

      setGrowth((prev) =>
        prev < 100 ? parseFloat((prev + Math.random() * 0.2).toFixed(1)) : prev
      );
    }, 5000);

    return () => clearInterval(liveInterval);
  }, []);

  const cards = [
    {
      title: "Total Users",
      value: users,
      icon: <FaUsers />,
      color: "primary",
    },
    {
      title: "Revenue",
      value: `$${revenue}`,
      icon: <FaMoneyBill />,
      color: "success",
    },
    {
      title: "Orders",
      value: orders,
      icon: <FaShoppingCart />,
      color: "warning",
    },
    {
      title: "Growth",
      value: `${growth}%`,
      icon: <FaChartLine />,
      color: "info",
    },
  ];

  return (
    <div className="row mb-4 fade-in">
      {cards.map((c, i) => (
        <div key={i} className="col-md-3">
          <div className={`stat-card bg-${c.color} stat-animate`}>
            <div>
              <h6>{c.title}</h6>
              <h3>{c.value}</h3>
            </div>
            <div className="stat-icon">{c.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
