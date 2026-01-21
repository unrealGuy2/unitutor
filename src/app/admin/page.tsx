"use client";

import { useState } from 'react';
import { UploadCloud, Check, User } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  // Mock Data for Students
  const [users, setUsers] = useState([
    { id: 1, name: 'Fashola Samson', email: 'fash@gmail.com', dept: 'Science', status: 'pending' },
    { id: 2, name: 'John Doe', email: 'john@yahoo.com', dept: 'Art', status: 'paid' },
    { id: 3, name: 'Sarah Smith', email: 'sarah@gmail.com', dept: 'Commercial', status: 'pending' },
  ]);

  // Mock Function to "Verify" payment
  const verifyUser = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: 'paid' } : user
    ));
    alert("User marked as Paid! Access granted.");
  };

  return (
    <div className="admin-container">
      {/* Header */}
      <div className="admin-header">
        <div>
          <span className="admin-badge">Admin Panel</span>
          <h1>UniTutor Operations</h1>
        </div>
        <Link href="/dashboard" className="btn btn-outline">View as Student</Link>
      </div>

      <div className="admin-grid">
        
        {/* LEFT COLUMN: Upload Form */}
        <div className="upload-card">
          <h3>Upload Material</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Title</label>
              <input type="text" placeholder="e.g. Physics 2024 Past Q" />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select>
                <option>Physics</option>
                <option>Chemistry</option>
                <option>Biology</option>
                <option>General</option>
              </select>
            </div>

            <div className="form-group">
              <label>Type</label>
              <select>
                <option value="pdf">PDF Document</option>
                <option value="video">Video Link</option>
              </select>
            </div>

            <div className="file-drop-zone">
              <UploadCloud size={40} style={{ marginBottom: '10px' }} />
              <p>Click to select PDF file</p>
            </div>

            <button className="btn btn-primary btn-full">Upload to Classroom</button>
          </form>
        </div>

        {/* RIGHT COLUMN: User Management */}
        <div className="users-card">
          <div className="card-header">
            <h3>Registered Aspirants ({users.length})</h3>
          </div>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ padding: '5px', background: '#334155', borderRadius: '50%' }}>
                        <User size={14} />
                      </div>
                      <div>
                        <div>{user.name}</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.dept}</td>
                  <td>
                    <span className={`status-badge ${user.status}`}>
                      {user.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    {user.status === 'pending' ? (
                      <button className="action-btn" onClick={() => verifyUser(user.id)}>
                        Approve
                      </button>
                    ) : (
                      <span style={{ color: '#10b981' }}><Check size={18} /></span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}