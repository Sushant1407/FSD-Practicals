import React, { useState } from 'react';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="test-form" className="auth-form">
      <div className="field-row">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>
      <div className="field-row">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <button type="submit" className="primary-button">Submit</button>

      {error && <p role="alert" className="feedback error-text">{error}</p>}
      {success && <p role="status" className="feedback success-text">{success}</p>}
    </form>
  );
};

export default Form;