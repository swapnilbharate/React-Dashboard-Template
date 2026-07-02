import { useEffect, useState } from "react";
import { activityFeed } from "../mockData";

export default function ActivityFeed() {
  const [activities, setActivities] = useState(activityFeed);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivities((prev) => [{ id: Date.now(), title: "Live sync completed", detail: "A new platform event was processed", time: "just now", accent: "primary" }, ...prev].slice(0, 4));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="panel-card">
      <h5>Recent Activity</h5>
      <div className="timeline-list">
        {activities.map((item) => (
          <div key={item.id} className="timeline-item">
            <span className={`timeline-dot ${item.accent}`} />
            <div>
              <strong>{item.title}</strong>
              <div className="page-subtitle">{item.detail}</div>
              <div className="page-subtitle">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
