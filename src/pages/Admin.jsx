import React, { useState, useEffect } from 'react';
import "./admin.css";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if admin session exists on component mount
    if (localStorage.getItem('isAdmin') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded authentication check as requested
    if (email === 'bhardwajhimanshu7686@gmail.com' && password === 'hima@123') {
      localStorage.setItem('isAdmin', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAuthenticated(false);
    setEmail('');
    setPassword('');
  };

  // The view when logged in successfully
  if (isAuthenticated) {
    const fakeData = [
      {
        type: "signup",
        name: "Himanshu Bhardwaj",
        email: "info@gmail.com",
        message: "User signed up",
        ip: "192.xxx.x.x",
        time: new Date().toLocaleString()
      },
      {
        type: "login",
        name: "Ritik Bhardwaj",
        email: "ritik@gmail.com",
        message: "User logged in",
        ip: "192.xxx.x.x",
        time: new Date().toLocaleString()
      },
      {
        type: "login",
        name: "Priyanshu Bhardwaj",
        email: "priyanshu@gmail.com",
        message: "User logged in",
        ip: "192.xxx.x.x",
        time: new Date().toLocaleString()
      },
      {
        type: "signup",
        name: "Ishu Parashar",
        email: "ishu@gmail.com",
        message: "User signed up",
        ip: "192.xxx.x.x",
        time: new Date().toLocaleString()
      },
      {
        type: "login",
        name: "Krishana Bhardwaj",
        email: "krishana@gmail.com",
        message: "User logged in",
        ip: "192.xxx.x.x",
        time: new Date().toLocaleString()
      }
    ];

    return (
      <div className="admin-dashboard">
        <h1>🔔 Admin Notification Center</h1>

        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>

        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card card-users">
            <div className="card-icon">👥</div>
            <div className="card-content">
              <div className="card-label">Total Users</div>
              <div className="card-value">200</div>
            </div>
          </div>
          <div className="card card-signups">
            <div className="card-icon">✨</div>
            <div className="card-content">
              <div className="card-label">Signups</div>
              <div className="card-value">80</div>
            </div>
          </div>
          <div className="card card-logins">
            <div className="card-icon">🔐</div>
            <div className="card-content">
              <div className="card-label">Logins</div>
              <div className="card-value">200</div>
            </div>
          </div>
          <div className="card card-unread">
            <div className="card-icon">🔔</div>
            <div className="card-content">
              <div className="card-label">Unread</div>
              <div className="card-value">10</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>User</th>
                <th>Message</th>
                <th>IP</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((n, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <span className={`badge badge-${n.type}`}>
                      {n.type}
                    </span>
                  </td>
                  <td>
                    <div className="user-info">
                      <div className="user-name">{n.name}</div>
                      <div className="user-email">{n.email}</div>
                    </div>
                  </td>
                  <td>{n.message}</td>
                  <td><code className="ip-code">{n.ip}</code></td>
                  <td>{n.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // The login form view when not logged in
  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <div className="login-header">
          <h2>Admin Login</h2>
          <p>Please enter your credentials to continue</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Email or Username</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" className="btn-login">
            <span>Log In</span>
            <i className="fas fa-lock"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;