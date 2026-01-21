import { Book, Clock, Zap } from 'lucide-react';

export default function DashboardOverview() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Dashboard Overview</h1>
      <p style={{ color: '#94a3b8' }}>Welcome back, Fashola. Your exam prep is on track.</p>
      
      <div className="stats-grid">
        {/* Card 1 */}
        <div className="stat-card">
          <div className="icon-box"><Book size={24} /></div>
          <div className="info">
            <h3>4</h3>
            <p>Subjects (Science)</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="stat-card">
          <div className="icon-box"><Clock size={24} /></div>
          <div className="info">
            <h3>42</h3>
            <p>Days to Exam</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="stat-card">
          <div className="icon-box"><Zap size={24} /></div>
          <div className="info">
            <h3>85%</h3>
            <p>Readiness Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}