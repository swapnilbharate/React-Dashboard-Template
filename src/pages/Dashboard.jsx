import StatsCards from "../components/StatsCards";
import DashboardChart from "../components/DashboardChart";
import ApiChart from "../components/ApiChart";
import ActivityFeed from "../components/ActivityFeed";
import RecentUsers from "../components/RecentUsers";
import SystemHealth from "../components/SystemHealth";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div>
      <div className="welcome-banner stagger">
        <div>
          <h2>{greeting}, {user || "there"}</h2>
          <p>Everything is trending up. Your team is operating at peak performance.</p>
        </div>
        <div className="quick-actions">
          <button className="quick-action-btn">Add User</button>
          <button className="quick-action-btn">Generate Report</button>
          <button className="quick-action-btn">Export Data</button>
        </div>
      </div>

      <StatsCards />

      <div className="grid-2 mt-4">
        <div className="stagger">
          <DashboardChart />
        </div>
        <div className="stagger">
          <ApiChart />
        </div>
      </div>

      <div className="grid-2 mt-4">
        <div className="stagger">
          <RecentUsers />
        </div>
        <div className="stagger">
          <ActivityFeed />
        </div>
      </div>

      <div className="mt-4 stagger">
        <SystemHealth />
      </div>
    </div>
  );
}
