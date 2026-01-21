"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import Router

export default function Register() {
  const router = useRouter(); // Initialize Router
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: 'science' // Default value
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data:", formData);
    
    // REDIRECT TO DASHBOARD
    router.push('/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Join the UNILORIN Aspirants 2026 Batch</p>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="e.g. Fashola Samson" 
              required 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="student@gmail.com" 
              required 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          {/* Department Selector */}
          <div className="form-group">
            <label>Select Department</label>
            <select 
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
            >
              <option value="science">Science (Physics, Chem, Bio)</option>
              <option value="commercial">Commercial (Acct, Govt, Econ)</option>
              <option value="art">Art (Lit, Govt, CRS)</option>
            </select>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Register
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link href="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}