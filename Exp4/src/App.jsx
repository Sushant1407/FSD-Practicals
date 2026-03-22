import React, { useState } from 'react';
import Button from './components/Button';
import Form from './components/Form';
import Dashboard from './components/Dashboard';

function App() {
  const [dashboardState, setDashboardState] = useState('loaded');

  const mockData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="hero-kicker">Experiment 4</p>
        <h1>Components Live Preview</h1>
        <p className="hero-subtitle">Interactive preview of reusable UI blocks with testable states.</p>
      </header>

      <section className="demo-card">
        <div className="section-title-row">
          <span className="section-index">1</span>
          <h2>Button Component</h2>
        </div>
        <p className="section-copy">Trigger an action and verify event behavior from the reusable button.</p>
        <Button text="Click Me!" onClick={() => alert('Button was clicked!')} />
      </section>

      <section className="demo-card">
        <div className="section-title-row">
          <span className="section-index">2</span>
          <h2>Form Component</h2>
        </div>
        <p className="section-copy">Validate required fields and display contextual success or error states.</p>
        <Form />
      </section>

      <section className="demo-card">
        <div className="section-title-row">
          <span className="section-index">3</span>
          <h2>Dashboard Component</h2>
        </div>

        <div className="state-control">
          <label htmlFor="dashboard-state"><strong>Change State:</strong></label>
          <select
            id="dashboard-state"
            value={dashboardState}
            onChange={(e) => setDashboardState(e.target.value)}
          >
            <option value="loaded">Loaded</option>
            <option value="loading">Loading</option>
            <option value="empty">Empty</option>
            <option value="error">Error</option>
          </select>
        </div>

        <div className="dashboard-preview">
          <Dashboard
            state={dashboardState}
            data={mockData}
            error="Something went wrong while fetching data!"
          />
        </div>
      </section>
    </div>
  );
}

export default App;