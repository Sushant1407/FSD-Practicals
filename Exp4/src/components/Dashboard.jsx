import React from 'react';

const Dashboard = ({ state, data, error }) => {
  if (state === 'loading') {
    return <div className="dashboard-state loading">Loading dashboard data...</div>;
  }

  if (state === 'error') {
    return <div className="dashboard-state error">Error: {error}</div>;
  }

  if (state === 'empty' || !data || data.length === 0) {
    return <div className="dashboard-state empty">No data available.</div>;
  }

  if (state === 'loaded') {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <ul className="dashboard-list">
          {data.map((item) => (
            <li key={item.id} className="dashboard-item">{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

export default Dashboard;