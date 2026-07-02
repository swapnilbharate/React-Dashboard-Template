import StatsCards from "../components/StatsCards";
import DashboardChart from "../components/DashboardChart";
import ApiChart from "../components/ApiChart";

import ActivityFeed from "../components/ActivityFeed";
import RecentUsers from "../components/RecentUsers";
import SystemHealth from "../components/SystemHealth";

export default function Dashboard() {
  return (
    <div>
      <h3>📊 Dashboard Overview</h3>

      <StatsCards />

      <div className="row mt-4">
        <div className="col-md-6">
          <DashboardChart />
        </div>

        <div className="col-md-6">
          <ApiChart />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <RecentUsers />
        </div>

        <div className="col-md-6">
          <ActivityFeed />
        </div>
      </div>

      <SystemHealth />
    </div>
  );
}
