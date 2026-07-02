import { useEffect, useMemo, useState } from "react";
import { FaUsers, FaMoneyBill, FaShoppingCart, FaChartLine } from "react-icons/fa";
import { dashboardStats } from "../mockData";

export default function StatsCards() {
  const [values, setValues] = useState(dashboardStats.map((item) => item.value));

  useEffect(() => {
    const timer = setInterval(() => {
      setValues((prev) => prev.map((value, index) => {
        if (index === 0) return value + 2;
        if (index === 1) return value + 40;
        if (index === 2) return value + 1;
        return Number((value + 0.1).toFixed(1));
      }));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const cards = useMemo(() => dashboardStats.map((item, index) => ({
    ...item,
    value: values[index],
    icon: item.icon === "users" ? <FaUsers /> : item.icon === "revenue" ? <FaMoneyBill /> : item.icon === "orders" ? <FaShoppingCart /> : <FaChartLine />,
    color: index % 2 === 0 ? "primary" : index === 2 ? "warning" : "info"
  })), [values]);

  return (
    <div className="stats-grid mb-4">
      {cards.map((card, index) => (
        <div key={card.title} className={`stat-card ${card.color} stagger`} style={{ animationDelay: `${index * 0.08}s` }}>
          <div>
            <h6>{card.title}</h6>
            <h3>{card.prefix}{card.value.toLocaleString()}{card.suffix}</h3>
            <div className="trend-pill">{card.change}</div>
          </div>
          <div className="stat-icon">{card.icon}</div>
        </div>
      ))}
    </div>
  );
}
