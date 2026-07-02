import { systemHealth } from "../mockData";

export default function SystemHealth() {
  return (
    <div className="panel-card">
      <h5>System Health</h5>
      <div className="progress-list">
        {systemHealth.map((item) => (
          <div key={item.label} className="progress-item">
            <div className="meta"><span>{item.label}</span><strong>{item.value}%</strong></div>
            <div className="progress-bar"><span style={{ width: `${item.value}%` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}
